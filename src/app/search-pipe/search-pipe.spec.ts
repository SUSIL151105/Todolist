import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPipe } from './search-pipe';

describe('SearchPipe', () => {
  let component: SearchPipe;
  let fixture: ComponentFixture<SearchPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
