import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

// import { AddCategory } from "./componets/AddCategory";
// import { GifGrid } from "./componets/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( onNewCategory ) => {
        if( categories.includes(onNewCategory) ) return;
        setCategories( [ onNewCategory, ...categories ] );
        
        // setCategories( cat => [ ...cat,'VAl' ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory = { val => onAddCategory(val) }
            />
            { 
                categories.map( (category) => 
                    (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    )
                ) 
            }
                

        </>
    );
};