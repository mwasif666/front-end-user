import { useFormik } from "formik"; // Correct import statement
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { getCartTotal, setEmptyCart } from "../../features/cartSlice";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Checkout = () => {
  const { authToken , user } = useContext(AuthContext);
  
  const navigate = useNavigate()
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

console.log("mdhasdgsa",authToken);
  const formik = useFormik({
    initialValues: {
      orderDetails: [
        {
          productName: cart?.prodTitle,
          productPrice: cart?.prodPrice,
          productColor: cart?.prodColor,
          productCategory: cart?.prodCategory,
          productFeature: cart?.productFeatured,
          ProductQty: cart?.prodQty
        }
      ],
      cusName:user?.userName || " ", // Use optional chaining to handle null
      email: user?.email || " ",
      phoneNo: 0,
      totalPrice: totalPrice || " ",
      totalQty: totalQuantity || " ",
      zipCode: 0,
      country: '',
      city: '',
      shippingAddress: '',
    },
    validationSchema: Yup.object({
      cusName: Yup.string().required('UserName is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNo: Yup.string().required('Phone number is required'),
      zipCode: Yup.number().required('Zip Code is required').positive('Zip Code must be positive'),
      country: Yup.string().required('Country is required'),
      shippingAddress: Yup.string().required('Shipping Address is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:5000/api/order/v1/placeorder', {
          method: 'POST',
          headers: {
            'auth-token': authToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (data.success) {
          formik.resetForm();
          alert("Place Order ")
          navigate("/")
          dispatch(setEmptyCart())
        } else {
          alert(data.message || 'Failed to add food.');
        }
      } catch (error) {
        console.log(error);
        console.error('Error adding food:', error);
      }
    },
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Muhammad",
        lastName: "Wasif",
        username: "",
        city: "",
        state: "",
        zip: "",
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="Email"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="number"
                value={values.number}
                onChange={handleChange}
                isInvalid={!!errors.number}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip

              if (!authToken) {
                return <Navigate to="/" replace={true} />;
            }
            
    return (
      <div className='container  min-h-screen max-h-full'>
        <h2 className='text-4xl mt-2 mb-4'>Check Out</h2>
        <hr className='mb-6'></hr>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data" className='mb-4'>
          <div className="mb-3 flex flex-col">
            <label htmlFor="productname" className="form-label">UserName</label>
            <input
              type="text"
              className={`form-control mt-2 w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.foodTitle && formik.errors.foodTitle ? 'border-yellow-500' : ''}`}
              id="cusName"
              name="cusName"
              value={formik.values.cusName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

            />
            {formik.touched.cusName && formik.errors.cusName && (
              <p className="text-yellow-500 mt-1">{formik.errors.cusName}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="productname" className="form-label">Email</label>
            <input
              type="email"
              className={`w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control mt-2 ${formik.touched.email && formik.errors.email ? 'border-yellow-500' : ''}`}
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-yellow-500 mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="phoneNo"
              className={`w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control mt-2 ${formik.touched.phoneNo && formik.errors.phoneNo ? 'border-yellow-500' : ''}`}
              id="phoneNo"
              name="phoneNo"
              value={formik.values.phoneNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNo && formik.errors.phoneNo && (
              <p className="text-yellow-500 mt-1">{formik.errors.phoneNo}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="phone" className="form-label">Total Price</label>
            <input
              type="totalPrice"
              className={`w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control mt-2 ${formik.touched.totalPrice && formik.errors.totalPrice ? 'border-yellow-500' : ''}`}
              id="totalPrice"
              name="totalPrice"
              value={formik.values.totalPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.totalPrice && formik.errors.totalPrice && (
              <p className="text-yellow-500 mt-1">{formik.errors.totalPrice}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="phone" className="form-label">Total Qunatity</label>
            <input
              type="number"
              className={`w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control mt-2 ${formik.touched.totalQty && formik.errors.totalQty ? 'border-yellow-500' : ''}`}
              id="totalPrice"
              name="totalPrice"
              value={formik.values.totalQty}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.totalQty && formik.errors.totalQty && (
              <p className="text-yellow-500 mt-1">{formik.errors.totalQty}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="productname" className="form-label">Zip Code</label>
            <input
              type="number"
              className={`form-control border-2 border-[#FEC013] rounded mt-2 w-full bg-white focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.zipCode && formik.errors.zipCode ? 'border-yellow-500' : ''}`}
              id="zipCode"
              name="zipCode"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <p className="text-yellow-500 mt-1">{formik.errors.zipCode}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="productname" className="form-label">Country</label>
            <input
              type="text"
              className={`form-control border-2 border-[#FEC013] rounded mt-2 w-full bg-white focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.country && formik.errors.country ? 'border-yellow-500' : ''}`}
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.country && formik.errors.country && (
              <p className="text-yellow-500 mt-1">{formik.errors.country}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="productname" className="form-label">City</label>
            <input
              type="text"
              className={`form-control border-2 border-[#FEC013] rounded mt-2 w-full bg-white focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.city && formik.errors.city ? 'border-yellow-500' : ''}`}
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-yellow-500 mt-1">{formik.errors.city}</p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="productname" className="form-label">Shipping Address</label>
            <input
              type="text"
              className={`form-control border-2 border-[#FEC013] rounded mt-2 w-full bg-white focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.shippingAddress && formik.errors.shippingAddress ? 'border-yellow-500' : ''}`}
              id="shippingAddress"
              name="shippingAddress"
              value={formik.values.shippingAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.shippingAddress && formik.errors.shippingAddress && (
              <p className="text-yellow-500 mt-1">{formik.errors.shippingAddress}</p>
            )}
          </div>          

          <button type='submit' className='bg-[#FEC013] px-4 py-2 m-1 rounded-md' >Place Order</button>
        </form >
      </div>
    );
  };
  
  export default Checkout;