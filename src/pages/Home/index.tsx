import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export function Home() {
  const { register, handleSubmit, watch } = useForm(); // O useForm é um hook que fornece métodos para lidar com formulários. O register é um método que registra o input no formulário, e o handleSubmit é um método que lida com o envio do formulário. Toda vez que o formulário for enviado, o handleSubmit vai chamar a função que eu passar como parâmetro.

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch("task");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>

          <TaskInput
            id="task"
            // name="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            // onChange={(e) => setTask(e.target.value)} // o onChange é um evento que é disparado toda vez que o valor do input é alterado. A cada digitação, o valor do input é passado para a função setTask.
            // value={task} // Uma boa prática, pois, se o estado for alterado por uma origem que não seja a digitação do usuário, eu quero também mostrar esse valor. Por exemplo, se eu quiser resetar o valor do input, eu posso chamar a função resetForm que vai setar o valor do input para vazio.
            {...register("task")}
          />

          {/* o datalist é uma lista de sugestões para um determinado input. */}
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Chocolate" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            // esse step é para que o input só aceite números de 5 em 5.
            step={5}
            // esse min é o número mínimo aceito no input.
            min={5}
            // esse max é o número máximo aceito no input.
            max={60}
            {...(register("minutesAmount"), { valueAsNumber: true })} // o valueAsNumber é para que o valor do input seja convertido para número.
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
