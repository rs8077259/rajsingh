const body = document.getElementById("body")
const mobileNavMenu = {
    smNav: document.getElementById("sm-nav"),
    hamburgerButton: document.getElementById("hamburger-button"),
    isActive: 0,
    transaction(event) {
        if (!this.isActive) {
            this.smNav.style.height = "600px"
            this.hamburgerButton.innerHTML = "&#10005"
            this.hamburgerButton.style.fontSize = "28px"
            this.isActive = 1
        }
        else {
            this.smNav.style.height = "0"
            this.hamburgerButton.style.fontSize = "36px"
            this.hamburgerButton.innerHTML = "&#8801"
            this.isActive = 0
        }
    },
    close(event) {
        this.smNav.style.height = "0"
        this.hamburgerButton.innerHTML = "&#8801"
        this.isActive = 0
    }

};
mobileNavMenu.hamburgerButton.addEventListener("click", mobileNavMenu.transaction.bind(mobileNavMenu))
