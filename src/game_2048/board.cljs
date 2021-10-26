(ns game-2048.board
  (:require [game-2048.square :refer [square]]))

(defn- get-style
  [width height]
  {:width                 "35rem"
   :height                "35rem"
   :padding               "1rem"
   :border-radius         "0.5rem"
   :background-color      "#bbada0"
   :display               "grid"
   :grid-gap              "1rem"
   :grid-template-columns (apply str (repeat width  "1fr "))
   :grid-template-rows    (apply str (repeat height "1fr "))})

(defn board
  [{game-board :board size :size}]
  [:div {:style (apply get-style size)}
   (map-indexed (fn [idx1 row]
                  (map-indexed (fn [idx2 s]
                                 (square {:number (if s (str s) nil)  
                                          :key    (str idx1 idx2)}))
                               row))
                game-board)])
