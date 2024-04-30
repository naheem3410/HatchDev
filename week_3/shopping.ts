/**
 * product interface
 */
interface Product {
    getName(): string;
    getPrice(): number;
}
/**
 * physical product interface
 */
interface PhysicalProduct extends Product {
    getWeight(): number;
    getDimensions(): { width: number; height: number };
}
/**
 * digital product interface
 */
interface DigitalProduct extends Product {
    getDownloadLink(): string;
}

/**
 * abstract class
 */
abstract class ProductBase implements Product {
    protected _name: string;
    protected _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
    
    getName(): string {
        return this._name;
    }

    getPrice(): number {
        return this._price;
    }
}

/**
 * implementation of interface and abstract class
 */
class PhysicalProduct extends ProductBase implements PhysicalProduct {
    private weight: number;
    private dimensions: { width: number; height: number };

    constructor(
        name: string,
        price: number,
        weight: number,
        dimensions: { width: number; height: number }
    ) {
        super(name, price);
        this.weight = weight;
        this.dimensions = dimensions;
    }

    getWeight(): number {
        return this.weight;
    }

    getDimensions(): { width: number; height: number } {
        return this.dimensions;
    }
}

/**
 * implementation of interface and abstract class
 */
class DigitalProduct extends ProductBase implements DigitalProduct {
    private downloadLink: string;

    constructor(name: string, price: number, downloadLink: string) {
        super(name, price);
        this.downloadLink = downloadLink;
    }

    getDownloadLink(): string {
        return this.downloadLink;
    }
}

/**
 * class to model cart item
 */
class CartItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice(): number {
        return this.product.getPrice() * this.quantity;
    }

    getProduct(): Product{
        return this.product;
    }
}

/**
 * class to model online shopping cart system
 */
class ShoppingCart {
    private cartItems: CartItem[] = [];

    addItem(product: Product, quantity: number): void {
        this.cartItems.push(new CartItem(product, quantity));
    }

    removeItem(product: Product): void {
        this.cartItems = this.cartItems.filter((item) => item.getProduct() !== product);
    }

    getItems(): CartItem[] {
        return this.cartItems;
    }

    getTotalPrice(): number {
        return this.cartItems.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Example Usage
const book = new PhysicalProduct("The Lord of the Rings", 15.99, 0.5, {
    width: 8,
    height: 10,
});

const movie = new DigitalProduct("The Shawshank Redemption", 9.99, "download-link");

const cart = new ShoppingCart();
cart.addItem(book, 2);
cart.addItem(movie, 1);

console.log("Total Price:", cart.getTotalPrice()); // Output: 35.98
