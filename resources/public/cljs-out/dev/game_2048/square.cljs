(ns game-2048.square)

(defn- get-style
  [{number :number}]
  {:background-color (condp = number
                       "2"    "#eee4da"
                       "4"    "#eee1c9"
                       "8"    "#f3b27a"
                       "16"   "#f69663"
                       "32"   "#f77c5f"
                       "64"   "#f75f3b"
                       "128"  "#edcf72"
                       "256"  "#edcc62"
                       "512"  "#edc950"
                       "1024" "#edc53f"
                       "2048" "#edc22e"
                       "#cdc1b4")
   :border-radius    "0.2rem"
   :display          "grid"
   :justify-content  "center"
   :align-items      "center"
   :font-family      "helvetica-bold"
   :color            (condp = number
                       "2" "#525252"
                       "4" "#525252"
                       "#f9f6f2")
   :font-size        "4rem"})

(defn square
  [{number :number k :key}]
  [:div{:style (get-style {:number number})
        :key k}
   [:p number]])
