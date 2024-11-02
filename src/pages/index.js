import Blackjack from "@/components/Blackjack";
import BlackjackElevado from "@/components/BlackjackElevado";
import Form from "@/components/Form";
import FormEncapsulado from "@/components/FormEncapsulado";
import FormME from '@/components/FormME'
import Trono from "@/components/Trono";
import Condicional from '@/components/Condicional'
import KeyLista from '@/components/KeyLista'
import Lista from '@/components/Lista'

export default function Home() {
  return (
    <main>
    <div className="d-flex justify-content-start">
      <div className="p-2">APP</div>
      <div className="p-2">React</div>
      <div className="p-2">Next</div>
    </div>
    <div className="d-flex justify-content-center p-2">
      <div className="d-flex flex-column">
          {/* <div>
            <h3>Blackjack</h3>
            <Blackjack></Blackjack>
          </div>
          <div>
            <h3>Blackjack Elevado</h3>
            <BlackjackElevado></BlackjackElevado>
          </div> */}
          {/* <div>
            <h3>Formulário</h3>
            <Form texto="as@gmail"></Form>
          </div>
          <div>
            <h3>Formulário Encapsulado</h3>
            <FormEncapsulado></FormEncapsulado>
          </div>
          <div>
            <h3>Formulário Multi Encapsulado</h3>
            <FormME />
          </div> */}
          {/* <div>
            <h3>Encapsulado Funções</h3>
            <Trono></Trono>
          </div> */}
          {/* <div>
            <h3>Renderização Condicional</h3>
            <Condicional />
          </div>*/}
          <div> 
            <h3>Lista</h3>
            <Lista />
          </div>
          <div>
            <h3>Key Lista</h3>
            <KeyLista />
          </div>

        </div>
    </div>

    </main>

  );
}
