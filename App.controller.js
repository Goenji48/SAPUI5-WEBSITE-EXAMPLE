sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict"

    return Controller.extend("MainPage.App", {
        onPress : function () {
            MessageToast.show("Button Pressed!")
        },

        onInit : function () {
            this.getView().setModel(new JSONModel({
                features: [
                    "Escute sem interrupções",
						"Baixe mídias de diversas plataformas",
						"Visual agradável",
                        "Sem anúncios",
						"Disponível em tema claro e escuro",
						"Reproduza vídeos",
						"Equalize suas músicas"
                ]
            }))
        },

        onChange : function (oEvent) {
            var bState = oEvent.getParameter("state")
            this.byId("ready").setVisible(bState)
        },

        onDownload : function () {
            MessageToast.show("Redirecionando para outra página...")
            window.location.href = "https://github.com/Goenji48/GJLPlayer-Android"
        }
    })
})