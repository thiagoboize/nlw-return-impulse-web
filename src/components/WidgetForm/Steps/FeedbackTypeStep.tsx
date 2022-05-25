import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";


interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}
// <> fragment - Como o react nao permite que vc tenha um elemento abaixo do outro é necessario criar uma div, para nao interferir no layout foi criado o fragment <> , ele nao aparece no html final

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>  
            <header>
                <span className="text-xl leading-6 ">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className=" flex py-8 gap-2 w-full">

                {Object.entries(feedbackTypes).map(([key, value]) => {

                    return (
                        <button
                            key={key}
                            className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}// nos eventos do react nao é possivel passar a execução de uma função ou seja , não pode passar apenas setFeedbackType(key) , por isso ele é envolto de uma arrow function
                            type="button"
                        >




                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>

                        </button>
                    )
                })
                }



            </div>
        </>
    )
}