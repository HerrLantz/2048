(ns game-2048.game
  (:require [game-2048.board            :refer [board]]
            [game-2048.state.game-state :refer [get-board
                                                get-size]]
            [game-2048.state.dispatcher :refer [dispatch]]))

(defn game
  []
  [:div (board {:board (get-board)
                :size (get-size)})])
