(ns ^:figwheel-hooks game-2048.core
  (:require
   [goog.dom                   :as    gdom]
   [reagent.dom                :as    rdom]
   [game-2048.board            :refer [board]]
   [game-2048.game             :refer [game]]
   [game-2048.key-handler      :refer [key-listener]]
   [game-2048.state.dispatcher :refer [dispatch]]
   [goog.events.KeyCodes       :as    keycodes]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 "2048"]
   [:h3 "YAY"]
   (game)])

(defn ^:export init
  []
  (key-listener {keycodes/W     #(dispatch {:action :move-up})
                 keycodes/UP    #(dispatch {:action :move-up})
                 keycodes/S     #(dispatch {:action :move-down})
                 keycodes/DOWN  #(dispatch {:action :move-down})
                 keycodes/A     #(dispatch {:action :move-left}) 
                 keycodes/LEFT  #(dispatch {:action :move-left}) 
                 keycodes/D     #(dispatch {:action :move-right})
                 keycodes/RIGHT #(dispatch {:action :move-right})}))

(defn mount [el]
  (rdom/render [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))
