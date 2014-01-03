/* Storages constructor
 * 
 * ARGUMENTS:
 * storageObj - either the window.sessionStorage or window.localStorage objects
 */
var Storage2 = function(storageObj) {
    Object.defineProperty(this, "storage", { value: storageObj, enumerable: true, writable: false, configurable: false});
};

Object.defineProperties(Storage2.prototype, {
    
    /* storage2.key(n)
     * 
     * ARGUMENTS:
     * n - integer
     * 
     * RETURNS:
     * The name of the nth key.
     */
    key: { value: function(n) {
        return this.storage.key(n);
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.set(name, data)
     * 
     * ARGUMENTS:
     * name - string
     * data - string
     * 
     * OPERATION:
     * Sets the value of name to data.
     */
    set: { value: function(name, data) {
        this.storage.setItem(name, data);
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.get(name)
     * 
     * ARGUMENTS:
     * name - string
     * 
     * RETURNS:
     * The value associated with name.
     */
    get: { value: function(name) {
        return this.storage.getItem(name);
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.remove(name)
     * 
     * ARGUMENTS:
     * name - string
     * 
     * OPERATION:
     * Removes the value associated with name.
     */
    remove: { value: function(name) {
        var data = this.storage.getItem(name);
        this.storage.removeItem(name);
        return data;
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.clear()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * OPERATION:
     * Clears all the values.
     */
    clear: { value: function() {
        this.storage.clear();
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.setJSON(name, obj)
     * 
     * ARGUMENTS:
     * name - string
     * obj - object
     * 
     * OPERATION:
     * Sets the value of name to obj, after it has been converted to a string.
     */
    setJSON: { value: function(name, obj) {
        this.storage.setItem(name, JSON.stringify(obj));
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.getJSON(name)
     * 
     * ARGUMENTS:
     * name - string
     * 
     * RETURNS:
     * The value associated with name, after it has been converted to JSON.
     */
    getJSON: { value: function(name) {
        return JSON.parse(this.storage.getItem(name));
    }, writable: false, enumerable: false, configurable: false},
    
    /* storage2.forEach(func)
     * 
     * ARGUMENTS:
     * func - function
     * 
     * OPERATION:
     * Calls the function func for every item, passing it the key as the first
     * argument and the value as the second.
     */
    forEach: { value: function(func) {
        for (var i in this.storage) {
            func(i, this.storage[i]);
        }
    }, writable: false, enumerable: false, configurable: false}
});

/* Storage2.storage(type)
 * 
 * ARGUMENTS:
 * type - string
 * 
 * RETURNS:
 * New Storage2 object based on the type given. If type is "session", the
 * object will be a wrapper around window.sessionStorage. If type is "local",
 * it will be a wrapper around window.localStorage.
 */
Storage2.storage = function(type) {
    type = type.toLowerCase();
    switch (type) {
    case "session":
        return new Storage2(window.sessionStorage);
    case "local":
        return new Storage2(window.localStorage);
    default:
        throw new Error("Invalid type.");
    }
};
