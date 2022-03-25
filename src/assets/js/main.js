function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        
        

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },


        apagaUm() {
            this.display.value = this.display.valor.slice(0, -1)
        },


        clearDisplay(){
            this.display.value = '';
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (error) {
                alert('Conta não validada');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },



        // A arrow function permite que o this não altere dentro da função, por exemplo se fosse uma function normal o this referenciaria o #document
        clickBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();