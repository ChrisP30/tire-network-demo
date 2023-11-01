class productsBtnFunctionality {
    constructor() {
        this.brakesDivBtn = document.querySelector('#select-brakes-product')
        this.wipersDivBtn = document.querySelector('#select-wiper-product')
        this.lightingDivBtn = document.querySelector('#select-lighting-product')
        this.suspensionDivBtn = document.querySelector('#select-suspension-product')
        this.enginesDivBtn = document.querySelector('#select-engine-product')
        this.tiresDivBtn = document.querySelector('#select-tire-product')


        this.brakeBtnClicked();
        this.wiperBtnClicked();
        this.lightingBtnClicked();
        this.engineBtnClicked();
        this.tireBtnClicked();
        this.suspensionBtnClicked();
    }

    brakeBtnClicked() {
        this.brakesDivBtn.addEventListener('click', () => {
            window.location.href = 'pages/brakesHome.html'
        })
    }

    wiperBtnClicked() {
        this.wipersDivBtn.addEventListener('click', () => {
            window.location.href = 'pages/wipersHome.html'
        })
    }

    lightingBtnClicked() {
        this.lightingDivBtn.addEventListener('click', () => {
            window.location.href = 'pages/lightingHome.html'
        })
    }

    engineBtnClicked() {
        this.enginesDivBtn.addEventListener('click', () => {
            window.location.href = 'pages/engineHome.html'
        })
    }

    tireBtnClicked() {
        this.tiresDivBtn.addEventListener('click', () => {
            window.location.href = 'pages/tireHome.html'
        })
    }

    suspensionBtnClicked() {
        this.suspensionDivBtn.addEventListener('click', () => {
            window.location.href = 'pages/suspensionHome.html'
        })
    }
}

new productsBtnFunctionality();