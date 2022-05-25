import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'


// headlessUI cuida de toda essa parte de userstate, entao não vamos utitilizar , vou deixar comentado para leitura futuramente

// export function Widget() {
// const [isWidgetOpen, setIsWidgetOpen] = useState(false) 
// cria uma constante com 2 parâmetros q valor dela é falso


//  const toggleWidgetVisibility = ()=>{
//      setIsWidgetOpen(!isWidgetOpen)
     //cria uma segunda função de toggle que vai mudar o valor do IsWidgetOpen,  se ele tiver o valor false, troca para true, se tiver true , troca pra falso
//  }


// referente na linha abaixo : //só execute a segunda parte da função se a primeira for verdadeira . também pode ser escrita da seguinte forma {isWidgetOpen ? <p>Hello World</p> : null }
// {isWidgetOpen && <p>Hello World</p>} 
// button onClick={toggleWidgetVisibility}
export function Widget() {
    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm></WidgetForm>
            </Popover.Panel>
        
        <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' >
                <ChatTeardropDots className="w-6 h-6" />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}