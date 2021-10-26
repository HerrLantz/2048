(ns game-2048.key-handler
  (:require [goog.events.KeyCodes :as    keycodes]
            [goog.events          :as    gev])
  (:import  [goog.events EventType KeyHandler]))

(defn capture-key
  [keycode-map]
  (let [key-handler (KeyHandler. js/document)
        press-fn    (fn [key-press]
                      (when-let [f (get keycode-map (.. key-press -keyCode))]
                        (f)))]
    (gev/listen key-handler
                (-> KeyHandler .-EventType .-KEY)
                press-fn)))

(defn key-listener
  [key-code-map]
  (capture-key key-code-map))
