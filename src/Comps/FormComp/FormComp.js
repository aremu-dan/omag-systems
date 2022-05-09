import React from 'react'
import FormStyle from './FormComp.module.css'

function FormComp({FormTitle, children}) {

   // // 
   // const HandleSubmit = (e) => {
   //   e.preventDefault();
   //   // let formData = new FormData([form]);
   //   // console.log(formData);
   // }

   return (
      <form className={FormStyle.Form} onSubmit={() => { this.preventDefault() }}>
         <div className={FormStyle.FormTitle}>
            <h4>{FormTitle}</h4>
         </div>
         <div className={FormStyle.FormContent}>
            {children}
         </div>
      </form>
   )
}

export default FormComp