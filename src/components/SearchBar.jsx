
import React, { useContext, useState, useRef, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch, products } = useContext(ShopContext);
    const [suggestions, setSuggestions] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (search.trim() === '') {
            setSuggestions([]);
            setDropdownVisible(false);
            return;
        }
        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setSuggestions(filtered);
        setDropdownVisible(filtered.length > 0);
    }, [search, products]);

    // Hide dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSuggestionClick = (id) => {
        setSearch('');
        setDropdownVisible(false);
        setShowSearch(false);
        navigate(`/product/${id}`);
    };
    // handleSuggestionClick navigates to the product page when a suggestion is clicked

    return showSearch ? (
        <div className='border-t border-b bg-gray-50 text-center relative z-50'>
            <div ref={inputRef} className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 bg-white relative'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder='Search'
                    className='flex-1 outline-none bg-inherit text-sm'
                    onFocus={() => setDropdownVisible(suggestions.length > 0)}
                />
                {dropdownVisible && suggestions.length > 0 && (
                    <div className='absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto text-left'>
                        {suggestions.map(product => (
                            <div
                                key={product._id}
                                className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100'
                                onClick={() => handleSuggestionClick(product._id)}
                                // handleSuggestionClick(product._id) navigates to the product page
                            >
                                <img src={product.image[0]} alt={product.name} className='w-8 h-8 object-cover rounded' />
                                {/* product.image[0] means the first image in the product's image array */}
                                <span className='text-sm'>{product.name}</span>
                            </div>
                        ))}
                    </div>
                )} 
            </div>
            <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" className='inline w-3 cursor-pointer' />
        </div>
    ) : null;
};

export default SearchBar;
