import {useEffect,useState} from 'react'
import $ from 'jquery'

export default function FormPayDatafast(props) {
    const [LoaderForm, setLoaderForm] = useState(false)
    

    useEffect(()=>{
        const scriptTag = document.createElement('script')
        scriptTag.src = `https://oppwa.com/v1/paymentWidgets.js?checkoutId=${props.id}`
        scriptTag.addEventListener('load',() => setLoaderForm(true))
        document.body.appendChild(scriptTag);
        
        const scriptBy =  document.createElement('script');
        scriptBy.type = "text/javascript"
        scriptBy.addEventListener('load', setLoaderForm(true))
        scriptBy.textContent = `
        var wpwlOptions = {  

            onReady: function() {  
            
               
            
            var datafast= '<br/><br/><img src='+'"https://www.datafast.com.ec/images/verified.png" style='+'"display:block;margin:0 auto; width:100%;">';  
            
            $('form.wpwl-form-card').find('.wpwl-button'). before(datafast);  
            
               
            
            },  
            
            style: "card",  
            
            locale: "es",  
            
            labels: {cvv: "CVV", cardHolder: "Nombre(Igual que en la tarjeta)"}  
            
            }
            wpwlOptions.onReady;
        `
        document.querySelector('footer').appendChild(scriptBy)
    },[])

    useEffect(() => {
        if(!LoaderForm) return ;
    }, [LoaderForm])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('pay now form')
    }
    return (
        <div className="container" >
            <form action="http://localhost:4000/data/actions" onSubmit={e=> handleSubmit(e)} className="paymentWidgets" data-brands="VISA MASTER DINERS DISCOVER AMEX" ></form>
            <footer>

            </footer>
        </div>
    )
}
