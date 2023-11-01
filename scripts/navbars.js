class ShopToggler {
    constructor() {
        this.tireShopBtn = document.querySelector('#tire-shop-link');
        this.partShopBtn = document.querySelector('#part-shop-link');
        this.wideScreenTireShop = document.querySelector('.wide-screen-tire-shop');
        this.wideScreenPartsShop = document.querySelector('.wide-screen-parts-shop');
        this.hamburgerBtn = document.querySelector('.hamburger-menu')
        this.originalMobileNav = document.querySelector('.original-mobile-screen')
        this.mobileScreenPartsShop = document.querySelector('.mobile-screen-parts-shop')
        this.mobileScreenTireShop = document.querySelector('.mobile-screen-tire-shop')
        this.mobileScreenTireShopBtn = document.querySelector('.original-mobile-shop-tires-container')
        this.mobileScreenPartsShopBtn = document.querySelector('.original-mobile-shop-parts-container')
        this.tireExitBtn = document.querySelector('#tires-exit-button')
        this.partsExitBtn = document.querySelector('#parts-exit-button')
        this.orignalMobileNavExitBtn = document.querySelector('#original-mobile-screen-exit')
        
        this.bindTireShopEvent();
        this.bindPartsShopEvent();
        this.hamburgerBtnClicked();
        this.mobileScreenPartsShopBtnClicked();
        this.mobileScreenTireShopBtnClicked();
        this.tireExitBtnClicked();
        this.partsExitBtnClicked();
        this.orignalMobileNavExitBtnClicked();
    }

    resetShops() {
        this.wideScreenPartsShop.classList.remove('show-parts-shop')
        this.wideScreenTireShop.classList.remove('show-tire-shop')
    }

    bindTireShopEvent() {
        this.tireShopBtn.addEventListener('click', () => {
            if (!this.wideScreenTireShop.classList.contains('show-tire-shop')) {
                this.resetShops();
                this.wideScreenTireShop.style.display = 'flex';
                
                // Give the browser a short moment to recognize the display change
                setTimeout(() => {
                    this.wideScreenTireShop.classList.add('show-tire-shop');
                    console.log('tire shop revealed');
                }, 10); // Increased the timeout a little for better compatibility
    
            } else {
                this.wideScreenTireShop.classList.remove('show-tire-shop');
                
                setTimeout(() => {
                    this.wideScreenTireShop.style.display = 'none';
                    console.log('tire shop hidden');
                }, 200); // This is the duration of your transition (from CSS)
            }
        });
    }

    bindPartsShopEvent() {
        this.partShopBtn.addEventListener('click', () => {
            if (!this.wideScreenPartsShop.classList.contains('show-parts-shop')) {
                this.resetShops();
                this.wideScreenPartsShop.style.display = 'flex';
                
                // Give the browser a short moment to recognize the display change
                setTimeout(() => {
                    this.wideScreenPartsShop.classList.add('show-parts-shop');
                    console.log('parts shop revealed');
                }, 10); // Increased the timeout a little for better compatibility
    
            } else {
                this.wideScreenPartsShop.classList.remove('show-parts-shop');
                
                setTimeout(() => {
                    this.wideScreenPartsShop.style.display = 'none';
                    console.log('parts shop hidden');
                }, 200); // This is the duration of your transition (from CSS)
            }
        });
    }
    hamburgerBtnClicked() {
        this.hamburgerBtn.addEventListener('click', () => {
            this.originalMobileNav.classList.toggle('mobile-nav-active-original');
        })
    }
    mobileScreenPartsShopBtnClicked() {
        this.mobileScreenPartsShopBtn.addEventListener('click', () => {
            this.mobileScreenPartsShop.classList.toggle('mobile-nav-active-shops')
        })
    }

    mobileScreenTireShopBtnClicked() {
        this.mobileScreenTireShopBtn.addEventListener('click', () => {
            this.mobileScreenTireShop.classList.toggle('mobile-nav-active-shops')
        })
    }

    tireExitBtnClicked() {
        this.tireExitBtn.addEventListener('click', () => {
            this.mobileScreenTireShop.classList.toggle('mobile-nav-active-shops')
        })
    }

    partsExitBtnClicked() {
        this.partsExitBtn.addEventListener('click', () => {
            this.mobileScreenPartsShop.classList.toggle('mobile-nav-active-shops')
        })
    }

    orignalMobileNavExitBtnClicked() {
        this.orignalMobileNavExitBtn.addEventListener('click', () => {
            this.originalMobileNav.classList.toggle('mobile-nav-active-original');
        })
    }
}

// Create an instance of the class to initialize and bind the events
new ShopToggler();