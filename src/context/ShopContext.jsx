import { createContext } from "react";
import { products } from "../assets/assets"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// createContext is a React API used to create global state.
// Context lets you share data (like products, user, cart, theme) across components without prop drilling.

export const ShopContext = createContext();

// This creates a context object called ShopContext
// It has two main parts:
// ShopContext.Provider → provides data
// ShopContext.Consumer / useContext(ShopContext) → consumes data
// Think of it like a global store.

const ShopContextProvider = (props) => {

    // This is a wrapper component
    // It will wrap your entire app (or part of it)
    // Any component inside it can access the shared data

    const [currency, setCurrency] = useState("$");

    const [search, setSearch] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('');

    const [cartItems, setCartItems] = useState({});
    // for showing and sending items in cart

    const navigate = useNavigate();
    // navigate is a function that allows you to programmatically change routes in your app. You can use it to navigate to different pages based on user actions (like clicking a button). For example, navigate('/cart') will take the user to the cart page.

    const delivery_fee = 10;

    const addToCart = (itemId, size, quantity = 1) => {
        if (!size) {
            toast.error("Please select a size");
            return;
        }

        let cartData = structuredClone(cartItems);
        // What it does: Creates a deep copy of the entire cartItems object (including nested objects).
        // Why use it: React requires immutability. If you directly mutate cartItems:
        // React compares the old and new state references. Since you modified the original object, the reference doesn't change, so React doesn't re-render. Using structuredClone creates a new object reference, so React detects the change.

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += quantity;
            } else {
                cartData[itemId][size] = quantity;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = quantity;
        }
        setCartItems(cartData);
        toast.success("Added to cart");
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const getCartCount = () => {
        let total = 0;
        // for (const items in cartItems) {
        //     for (const item in cartItems[items]) {
        //         try {
        //             if (cartItems[items][item] > 0) {
        //                 totalCount += cartItems[items][item]
        //             }
        //         } catch (error) {

        //         }
        //         // This try-catch is a safety net. It prevents the entire function from crashing if there's an unexpected issue with the cartItems structure (like missing properties or incorrect data types). If an error occurs while accessing cartItems[items][item], it will be caught, and the loop will continue without adding to totalCount, ensuring the app remains stable.
        //     }            
        // }
        // return totalCount;

        Object.values(cartItems).forEach(product => {
            // What object.values does: 👉 Takes object values only (ignores keys). It will run the entire thing
            // ✅ 2. forEach 👉 Array method (ONLY arrays)
            // ✅ 3. for…in 👉 Used to iterate object keys.
            // 4. for…of 👉 Used to iterate values. If it get the answer it can stop in the middle.

            Object.values(product).forEach(qty => {
                total += qty;
            });
        });
        return total;
    }

    const updateQuantity = async (itemId, size, qty) => {
        let cartData = structuredClone(cartItems);
        if (qty === 0) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            cartData[itemId][size] = qty;
        }
        setCartItems(cartData);
    }

useEffect(() => {
    const locale = navigator.language;

    const currencyMap = {
        "en-US": "$",
        "en-GB": "£",
        "en-IN": "₹",
        "hi-IN": "₹",
        "ur-PK": "Rs",
        "en-PK": "Rs"
    };

    setCurrency(currencyMap[locale] || "$");
}, []);

//   ✅ 2. Bracket notation (what we used)

// Works when:

// key is dynamic (comes from variable)
// OR contains hyphens
// OR spaces
// OR special characters

const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, selectedCategory, setSelectedCategory, cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
}

// This object holds all data you want to share globally
// Any component using useContext(ShopContext) will receive this object

return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider