import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css'],
})
export class AdminProductItemComponent implements OnInit {
  constructor(private productService: ProductService, private _snackBar : MatSnackBar) {}

  product = {
    _id: null,
    title: null,
    imageUrl: null,
    details: null,
    price: null,
    cloudinary_id: null,
    category: null,
  };

  image;

  @Input() products;

  ngOnInit(): void {
    // this.product = this.products[0];
    this.image = '../../../assets/product.png';
  }

  captureProduct(value) {
    this.product = value;
    console.log(this.product);
    this.oldProductForm.patchValue({
      title: this.product.title,
      details: this.product.details,
      price: this.product.price,
      category: this.product.category,
    });

  }

  onDeleteProduct(product) {
    this.productService.delete(product._id).subscribe(
      (res) => {
        const index = this.products.indexOf(product, 0);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editedProduct = new FormData();

  oldProductForm = new FormGroup({
    title: new FormControl(),
    details: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });



  onImageSelected(input) {
    if (input.files && input.files[0]) {
      console.log(input.files[0]);
      this.editedProduct.append('image', input.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload = (_event) => {
        this.image = reader.result;
      };
    }else{
      this.editedProduct.append('image', null);
    }
  }


  onEditProduct() {
    this.editedProduct.append(
      'category',
      this.oldProductForm.value['category']
    );
    this.editedProduct.append('price', this.oldProductForm.value['price']);
    this.editedProduct.append('details', this.oldProductForm.value['details']);
    this.editedProduct.append('title', this.oldProductForm.value['title']);

    document.getElementById("closeModalButton3").click();

    let unsupscriber = this.productService
      .edit(this.product._id, this.editedProduct)
      .subscribe((res) => {
        console.log(res);
        this._snackBar.open('Product edited successfully.', '', {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: ['snackBar'],
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open(
          'Something goes wrong, product was not edited.',
          '',
          {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: ['snackBar'],

          }
        );
      },
      () => {
        unsupscriber.unsubscribe();
      }
      );
      this.oldProductForm.reset();
      unsupscriber = this.productService.getAll().subscribe((products)=>{this.products = products}, ()=>{unsupscriber.unsubscribe()});
  }
}
