import { useState } from "react"
import { Button } from "../Button/Button";

type FormProps = {
    submitFunction: (title:string, pages: number) => void
};

export function Form({ submitFunction }: FormProps){

const [ erroMessage, setErroMessage ] = useState<string[]>([])
const [ formData, setFormData ] = useState({ title: '', pages: 0 });
      


function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData(prevData => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ));
  }


  function resetForm() {
    setFormData({ title: '', pages: 0})
  }
  
  function isFormValid () {
  
    const errors = [];
    //bookTitle
    if (formData.title === '' ) {
      errors.push('O campo Titulo é obrigatório!')
    }
    //bookPages
    if (formData.pages <= 0) {
      errors.push('O campo Páginas precisa ser um número maior que zero!')
    }
  setErroMessage(errors)
    return errors.length === 0;
  }
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isFormValid()) {
    submitFunction(formData.title, formData.pages);
    resetForm();
    setErroMessage([]);
    }
  }

return (
    <form action=""  className='books-form'
    onSubmit={ handleSubmit }>
    <input
      type="text"
      placeholder="Titulo"
      name="title"
      value={formData.title}
      onChange={ handleChange }
    />
    <input
      type="number"
      placeholder="Quantidade de páginas"
      name="pages"
      value={formData.pages}
      onChange={ handleChange }
    />
    {erroMessage.length > 0
    && (
    <div className='form-message'>
      { erroMessage.map(message => (
        <p key={message}>{message}</p>
      ))}
    </div>
    )}
    <Button> 
      Adicionar
    </Button>
    </form>

    )
}