// storeage封装
const STORAGE_KEY='mall'
export default{
    // 写入值
    setItem(key,value,module_name){
        if(module_name){
            let val=this.getStorge(module_name);
            val[key]=value;
            this.setItem(module_name,val);
        }else{
            let val=this.getStorge();
            val[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    },
    // 获取具体的某一个键的值eg:获取username的值
    // module_name--类似一个root/user值
    getItem(key,module_name){
        if(module_name){
            let val=this.getItem(module_name)[key];
            if(val) return val[key];
        }
        return this.getStorge()[key];
    },
    getStorge(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}');
    },
    
    clear(key,module_name){
        let val=this.getStorge();
        if(module_name){
            if(!val[module_name][key]) return;
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    },
}