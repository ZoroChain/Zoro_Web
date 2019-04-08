namespace WebBrowser
{
    export class ElementTool
    {   
        static createButton(background:Element):HTMLButtonElement{
            var button = document.createElement("button") as HTMLButtonElement;
            
            return button;
        }
    }
}