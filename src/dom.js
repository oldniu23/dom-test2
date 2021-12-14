window.dom = {
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length === 3){
            //dom.style(div,'color','red')   这样的就是想把color改成red  就是写
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
             // dom.style(div,'color')  这样的就是想获取div里的color   
             return node.style[name]
            }else if(name instanceof Object){
                // dom.style(div,{color:'red'})  写
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList,fn){
            for(let i=0;i<nodeList.length;i++){
                fn.call(null,nodeList[i])   // this不传
            } 
    }
}