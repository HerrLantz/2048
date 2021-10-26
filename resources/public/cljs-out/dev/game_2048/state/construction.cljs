(ns game-2048.state.construction
  (:require [ysera.random :refer [get-random-int]]
            [ysera.test   :refer [is=]]))

(defn get-empty-squares-coordinates
  [game]
  (->> (map-indexed (fn [y row]
                      (map-indexed (fn [x tile]
                                     (if (nil? tile) [y x] nil)) row))
                    game)
       (reduce (fn [acc curr] (apply conj acc curr)))
       (filter identity)
       (into [])))

(defn add-random-square
  [game]
  (let [new-tile          (if (< (rand) 0.9) 2 4)
        available-squares (get-empty-squares-coordinates game)
        rand-idx          (rand-int (count available-squares))
        rand-pos          (get available-squares rand-idx)]
    (assoc-in game rand-pos new-tile)))

(defn create-board
  [x y]
  (->> (repeat y (repeat x nil))
       (mapv (fn [row] (into [] row)))
       add-random-square
       add-random-square))

(defn create-game
  [x y]
  {:board   (create-board x y)
   :score   0
   :history []})

(defn board-size
  [game]
  [(count (first (:board game)))
   (count (:board game))])

(defn transpose-board
  [game]
  (apply mapv vector game))

(defn find-next-non-empty
  [row idx]
  (loop [i (inc idx)]
    (cond
      (= i (count row)) nil
      (get row i)       i
      :else             (recur (inc i)))))

(defn can-merge?
  [n1 n2]
  (cond
    (and (nil? n1) (some? n2))            true
    (and (some? n1) (some? n2) (= n1 n2)) true
    :else                                 false))

(defn update-row
  [row idx next-idx]
  (-> (update row idx + (get row next-idx))
      (assoc next-idx nil)))

(defn merge-row
  [row]
  (loop [idx      0
         next-idx (find-next-non-empty row idx)
         rw       row]
    (if (nil? (get rw next-idx))
      rw 
      (let [can-merge    (can-merge? (get rw idx) (get rw next-idx))
            new-row      (if can-merge (update-row rw idx next-idx) rw)
            new-idx      (if (some? (get rw idx)) (inc idx) idx)
            new-next-idx (find-next-non-empty new-row new-idx)]
        (recur new-idx
               new-next-idx
               new-row)))))

(defn reverse-and-merge
  [row]
  (->> row
       reverse
       (into [])
       merge-row
       reverse
       (into [])))

(defn get-non-empty-squares
  [board]
  (->> (flatten board)
       (filterv identity)))

(defn get-score-diff
  [board1 board2]
  (loop [squares1 (sort (get-non-empty-squares board1))
         squares2 (sort (get-non-empty-squares board2))
         sum      0]
    (cond
      (empty? squares1)                     sum
      (= (first squares1) (first squares2)) (recur (rest squares1)
                                                   (rest squares2)
                                                   sum)
      :else                                 (recur (rest squares1)
                                                   (drop 2 squares2)
                                                   (+ sum (first squares1))))))

(defmulti shift-tiles
  (fn [game direction] direction))

(defmethod shift-tiles :left
  [board]
  (mapv (fn [row] (merge-row row)) board))

(defmethod shift-tiles :right
  [board]
  (mapv (fn [row] (reverse-and-merge row)) board))

(defmethod shift-tiles :up
  [board]
  (-> (mapv (fn [row] (merge-row row))
            (transpose-board board))
      transpose-board))

(defmethod shift-tiles :down
  [board]
  (-> (mapv (fn [row] (reverse-and-merge row))
            (transpose-board board))
      transpose-board))

(defn merge-board
  [game direction]
  (let [board     (:board game)
        new-board (shift-tiles board direction)
        new-score (+ (get-score-diff new-board board) (:score game))]
    (-> game
        (assoc :board   (if (= board new-board)
                          new-board
                          (add-random-square new-board)))
        (assoc :score   new-score))))
