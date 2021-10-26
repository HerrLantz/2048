(ns game-2048.state.dispatcher
  (:require [game-2048.state.construction :refer [merge-board
                                                  create-game]]
            [game-2048.state.game-state   :refer [game-state]]))

(defn dispatch
  [{action :action value :value}]
  (condp = action
    :move-left  (swap! game-state merge-board :left)
    :move-right (swap! game-state merge-board :right)
    :move-up    (swap! game-state merge-board :up)
    :move-down  (swap! game-state merge-board :down)
    :reset      (reset! game-state (apply create-game value))))


