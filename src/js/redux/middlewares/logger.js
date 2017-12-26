export default function (store) {
    
    return function (next) {
        
        return function (action) {

            console.log("---", "dispatching", action);
            next(action);
        }
    }
}