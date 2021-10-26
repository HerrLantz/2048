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

(defn add-random-tile
  [game]
  (let [new-tile          (if (< (rand) 0.9) 2 4)
        available-squares (get-empty-squares-coordinates game)
        rand-idx          (rand-int (count available-squares))
        rand-pos          (get available-squares rand-idx)]
    (assoc-in game rand-pos new-tile)))

(defn create-game
  [x y]
  (->> (repeat y (repeat x nil))
       (mapv (fn [row] (into [] row)))
       add-random-tile
       add-random-tile))

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

(defmulti shift-tiles
  (fn [game direction] direction))

(defmethod shift-tiles :left
  [game]
  (mapv (fn [row] (merge-row row)) game))

(defmethod shift-tiles :right
  [game]
  (mapv (fn [row] (reverse-and-merge row)) game))

(defmethod shift-tiles :up
  [game]
  (-> (mapv (fn [row] (merge-row row))
            (transpose-board game))
      transpose-board))

(defmethod shift-tiles :down
  [game]
  (-> (mapv (fn [row] (reverse-and-merge row))
            (transpose-board game))
      transpose-board))
