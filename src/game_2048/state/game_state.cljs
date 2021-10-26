(ns game-2048.state.game-state
  (:require [reagent.core                 :as      r]
            [game-2048.state.construction :refer [create-game
                                                  board-size]]))

(defonce game-state (r/atom (create-game 4 4)))

(defn get-board
  []
  (:board (deref game-state)))

(defn get-score
  []
  (:score (deref game-state)))

(defn get-previous-board
  []
  (first (:history (deref game-state))))

(defn get-size
  []
  (board-size (deref game-state)))
