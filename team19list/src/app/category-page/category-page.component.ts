import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Listing {
  title: string;
  meta: string;
  type: 'cat' | 'dog';
}

@Component({
  selector: 'app-category-page',
  imports: [CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  listings: Listing[] = [
    { title: 'White cat kittens', meta: '1h ago · Ktown', type: 'cat' },
    { title: '8 weeks old kitten', meta: '1h ago · Riverside', type: 'cat' },
    { title: 'Cats for rehoming', meta: '3h ago · Norwalk', type: 'cat' },
    { title: 'German Shepherd', meta: '1h ago · Glendora', type: 'dog' },
    { title: 'Adult female poodle', meta: '1h ago · Burbank', type: 'dog' },
    { title: 'Yorkie puppies $1000', meta: '3h ago · Rosemead', type: 'dog' },
  ];

  filterCatsOnly = false;
  filterDogsOnly = false;

  quickViewListing: Listing | null = null;
  quickViewImages: string[] = [];
  quickViewImageIndex: number = 0;

  get filteredListings(): Listing[] {
    if (this.filterCatsOnly && !this.filterDogsOnly) {
      return this.listings.filter(l => l.type === 'cat');
    }
    if (this.filterDogsOnly && !this.filterCatsOnly) {
      return this.listings.filter(l => l.type === 'dog');
    }
    return this.listings;
  }

  onCatsOnlyChange(event: any) {
    this.filterCatsOnly = event.target.checked;
    if (this.filterCatsOnly) this.filterDogsOnly = false;
  }

  onDogsOnlyChange(event: any) {
    this.filterDogsOnly = event.target.checked;
    if (this.filterDogsOnly) this.filterCatsOnly = false;
  }

  openQuickView(listing: Listing) {
    this.quickViewListing = listing;
    // For now, use 3 of the same image
    const img = listing.type === 'cat' ? '/cat.png' : '/dog.png';
    this.quickViewImages = [img, img, img];
    this.quickViewImageIndex = 0;
  }

  closeQuickView() {
    this.quickViewListing = null;
  }

  prevQuickViewImage() {
    if (this.quickViewImages.length > 0) {
      this.quickViewImageIndex = (this.quickViewImageIndex - 1 + this.quickViewImages.length) % this.quickViewImages.length;
    }
  }

  nextQuickViewImage() {
    if (this.quickViewImages.length > 0) {
      this.quickViewImageIndex = (this.quickViewImageIndex + 1) % this.quickViewImages.length;
    }
  }

  selectQuickViewImage(idx: number) {
    this.quickViewImageIndex = idx;
  }
}
