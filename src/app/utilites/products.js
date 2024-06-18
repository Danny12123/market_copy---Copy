import Pic1 from '../../../public/images/products/1.jpg'
import Pic2 from '../../../public/images/products/2.jpg'
import Pic3 from '../../../public/images/products/3.jpg'
import Pic4 from '../../../public/images/products/4.jpg'
import Pic5 from '../../../public/images/products/belt.jpg'
import Pic6 from '../../../public/images/products/clothes-1.jpg'
import Pic7 from '../../../public/images/products/clothes-2.jpg'
import Pic8 from '../../../public/images/products/clothes-3.jpg'
import Pic9 from '../../../public/images/products/clothes-4.jpg'
import Pic10 from '../../../public/images/products/jacket-1.jpg'
import Pic11 from '../../../public/images/products/jacket-2.jpg'
import Pic12 from '../../../public/images/products/jacket-3.jpg'
import Pic13 from '../../../public/images/products/watch-4.jpg'
import Pic14 from '../../../public/images/products/watch-3.jpg'
import Pic15 from '../../../public/images/products/watch-2.jpg'
import Pic16 from '../../../public/images/products/watch-1.jpg'
import Pic17 from '../../../public/images/products/sports-6.jpg'
import Pic18 from '../../../public/images/products/sports-5.jpg'
import Pic19 from '../../../public/images/products/sports-4.jpg'
import Pic20 from '../../../public/images/products/sports-3.jpg'
import Pic21 from '../../../public/images/products/sports-2.jpg'
import Pic22 from '../../../public/images/products/shoe-5.jpg'
import Pic23 from '../../../public/images/products/shoe-3.jpg'
import Pic24 from '../../../public/images/products/jewellery-1.jpg'
import Pic25 from '../../../public/images/products/jewellery-3.jpg'
import Pic26 from '../../../public/images/products/party-wear-1.jpg'
import Pic27 from '../../../public/images/products/shirt-1.jpg'

export const products = [
  {
    id: 1,
    user_id: 'fr3',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 170.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: false,
    images: [Pic1, Pic2, Pic3, Pic4],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 2,
    user_id: 'fr3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 420.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic4, Pic5, Pic6, Pic7],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 3,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 300.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: 'true',
    images: [Pic8, Pic9, Pic10, Pic11],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 4,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 130.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic12, Pic13, Pic14, Pic15],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 5,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 110.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: false,
    images: [Pic16, Pic17, Pic18, Pic19],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 6,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 80.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic17, Pic18, Pic19, Pic20],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 7,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 142.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic21, Pic22, Pic23, Pic24],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 8,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 10.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic25, Pic26, Pic27, Pic6],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 9,
    user_id: 'fr3',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 200.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: false,
    images: [Pic1, Pic2, Pic3, Pic4],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 10,
    user_id: 'fr3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 250.99,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: false,
    images: [Pic4, Pic5, Pic6, Pic7],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 11,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 398.28,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic8, Pic9, Pic10, Pic11],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 12,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 543.28,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic12, Pic13, Pic14, Pic15],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 13,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 230.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: false,
    images: [Pic16, Pic17, Pic18, Pic19],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 14,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 127.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic17, Pic18, Pic19, Pic20],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 15,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 60.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: true,
    images: [Pic21, Pic22, Pic23, Pic24],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
  {
    id: 16,
    user_id: 'f3r3ds',
    product_name: 'New ladies black top',
    description: 'Cloth Mens short sleeved polo, business casual s',
    specification: [{ spec_name: 'Brand', spec_value: 'Apple' }],
    weigh: 12.4,
    height: 45.6,
    width: 180,
    amount: 120.68,
    lowest_amount: 99.47,
    quantity: 100,
    negotiate: false,
    images: [Pic25, Pic26, Pic27, Pic6],
    number_of_product_ordered: 10,
    review: [{ user_id: '34fd', rate: 4, comment: 'Good product' }],
    product_category: 'Dress',
    category_type: 'Top',
    created_at: Date.now(),
    sizes: [
      { size: 'sm', number: 50, color: 'white' },
      { size: 'lg', number: 50, color: 'black' },
    ],
    barcode: '094urjr3',
    barcode_image_path: 'my_image.png',
    qr_code_image_path: 'qr.path.png',
    discount: null,
    status: 'Approved',
  },
]
