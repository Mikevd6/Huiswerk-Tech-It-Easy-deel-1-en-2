import React from 'react';
import { calculateSold } from './helpers/calculateSold.js';
import { calculatestock } from './helpers/calculatestock.js';
import { calculateremaining } from './helpers/calculateremaining.js';
import inventory from './constants/inventory.js';

function App() {
    return (
        <div>
            <h1>Tech It Easy Dashboard</h1>
            <p className="sold-count">Totaal verkochte TV's: {calculateSold(inventory)}</p>
            <p className="stock-count">Totaal ingekochte TV's: {calculatestock(inventory)}</p>
            <p className="remaining-count">Nog te verkopen TV's: {calculateremaining(inventory)}</p>
        </div>
    );
}

export default App;