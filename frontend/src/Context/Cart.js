import { useState,createContext,useEffect } from "react";
 export const cartContext = createContext();
 export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).map(item => ({...item, isSelected: true})) : []);

    const updateQuantity = (itemId, change) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === itemId) {
                if (change < 0 && item.quantity <= 1) {
                    return item;
                }
                return { ...item, quantity: item.quantity + change };
            }
            return item;
        }));
    };

    const toggleItemSelection = (itemId) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === itemId) {
                return { ...item, isSelected: !item.isSelected };
            }
            return item;
        }));
    };

    const deleteItem = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const addToCart=(item)=>{
        // check if item already exists in cart
        const existingItem = cartItems.find((i)=>{
            return i.id  === item.id;
        });
        if(existingItem){
            setCartItems(
                cartItems.map((i)=>{
                    if(i.id === existingItem.id){
                        return {...i, quantity: i.quantity + 1}
                    }
                    return i;
                })
            )
        }else{
            setCartItems([...cartItems, {...item ,quantity:1}]);
        }
       
        
    }
    const removeFromCart=(item)=>{
        const existingItem = cartItems.find((i)=>{
            return i.id  === item.id;
        });
        if(existingItem.quantity===1){
            setCartItems(cartItems.filter((i)=>{
                return i.id !== item.id;
            }));
        }else{
                setCartItems(
                    cartItems.map((cartItem) =>
                      cartItem.id === item.id
                       ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                    )
                  );
            
        }
        
    }
    const emptyCart=()=>{
        setCartItems([]);
    }
    const getCartTotal=()=>{
        const total = cartItems
            .filter(item => item.isSelected)
            .reduce((total, item) => total + item.price * item.quantity, 0);
        return Number(total.toFixed(2));
    }
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);
      
    useEffect(()=>{
        // fetch cart items from local storage
        const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
        if(cartItemsFromStorage){
            setCartItems(cartItemsFromStorage);
        }
    },[]);
    return (
        <cartContext.Provider value={{ cartItems,updateQuantity,addToCart,removeFromCart,emptyCart,getCartTotal,toggleItemSelection,deleteItem }}>
            {children}
        </cartContext.Provider>
    )

 }

