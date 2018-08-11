class PvInput extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <div class="c-input">
        <div class="container">
          <input
            class="pv-input"
            placeholder="${this.getAttribute('placeholder')}"
            spellcheck="false"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            ${this.getAttribute('autofocus') ? 'autofocus' : ''}
          >
          <div class="pv-input__label">${this.getAttribute('label')}</div>
          <div class="pv-input__hint">${this.getAttribute('hint')}</div>
          <div class="pv-input__hint error">${this.getAttribute('error')}</div>
          <div class="pv-input__hint success">${this.getAttribute('success')}</div>
          <div class="pv-input__overflow"></div>
          <div class="pv-input__accent-line"></div>
        </div>
      </div>
    `
  }
}

customElements.define('pv-input', PvInput)
