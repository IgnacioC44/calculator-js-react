import { useState } from "react";
import { Calculator } from ".";
export function CalcFeat() {

    const [screen, setScreen] = useState(" ");

    const handleButtonClick = (value) => {
        if (screen === "0") {
            setScreen(value);
        } else {
            setScreen(screen + value);
        }

        if (value === "=") {
            try {
                // eslint-disable-next-line no-eval
                setScreen(eval(screen.replace("x", "*")));
            } catch (error) {
                setScreen("Error");
            }
        }
    };

    return (
        <Calculator.Root className="flex flex-col items-center h-screen justify-center bg-gray-200">
            <div className="flex flex-col gap-2 p-4 bg-[#000000] rounded-lg shadow-lg">
                <Calculator.Header content={screen} />
                <div>
                    <div className="flex gap-0.5 mb-0.5">
                        <Calculator.Button label="7" onClick={() => handleButtonClick("7")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="8" onClick={() => handleButtonClick("8")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="9" onClick={() => handleButtonClick("9")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="x" onClick={() => handleButtonClick("x")} className="bg-[#ff9200] text-white hover:bg-[#ff7f00]" />
                    </div>

                    <div className="flex gap-0.5 mb-0.5">
                        <Calculator.Button label="4" onClick={() => handleButtonClick("4")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]"  />
                        <Calculator.Button label="5" onClick={() => handleButtonClick("5")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="6" onClick={() => handleButtonClick("6")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="-" onClick={() => handleButtonClick("-")} className="bg-[#ff9200] text-white hover:bg-[#ff7f00]" />
                    </div>

                    <div className="flex gap-0.5 mb-0.5">
                        <Calculator.Button label="1" onClick={() => handleButtonClick("1")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="2" onClick={() => handleButtonClick("2")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="3" onClick={() => handleButtonClick("3")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="+" onClick={() => handleButtonClick("+")} className="bg-[#ff9200] text-white hover:bg-[#ff7f00]" />
                    </div>

                    <div className="flex gap-0.5 mb-0.5">
                        <Calculator.Button label="0" onClick={() => handleButtonClick("0")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="." onClick={() => handleButtonClick(".")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                        <Calculator.Button label="=" onClick={() => handleButtonClick("=")} className="bg-[#ff9200] text-white hover:bg-[#ff7f00]"/>
                        <Calculator.Button label="/" onClick={() => handleButtonClick("/")} className="bg-[#ff9200] text-white hover:bg-[#ff7f00]" />
                    </div>
                    <Calculator.Button label="C" onClick={() => setScreen("")} className="bg-[#2f2f2f] text-white hover:bg-[#4f4f4f]" />
                </div>
            </div>

        </Calculator.Root>
    );
}