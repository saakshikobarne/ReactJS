//defining the render function
/*
function customRender(element, container){
    const domElement= document.createElement(element.type);
    domElement.innerHTML= element.children;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);

    container.appendChild(domElement);
}
*/

//defining render function using loop based code for setting the attributes
function customRender(element, container){
    const domElement= document.createElement(element.type);
    domElement.innerHTML= element.children;
    for (const prop in element.props) {
        if(prop== 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domElement);
}

//element 
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank' 
    },
    children: 'click me to visit google'
}

const mainContainer= document.querySelector('#root')


//injecting elements inside the DOM tree by rendering
//renderMethod(element to inject, where to inject)

customRender(reactElement, mainContainer);