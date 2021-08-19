import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { brands, material, section } from "../utils";
import { CardComponent } from "../components/CardComponent";
import { FilterComponent } from "../components/FilterComponent";
import { StateInterface } from "../store/types";
import TitleComponent from "../components/TitleComponent";
import LabelComponent from "../components/LabelComponent";
import { fetchDataRequest } from "../store/actions/dataFetchAction";
import { useDispatch } from "react-redux";

const Products = () => {
  //State

  const [productMaterial, setProductMaterial] = useState<string[]>([]);
  const [productBrands, setProductBrands] = useState<string[]>([]);
  const [productSection, setProductSection] = useState<string[]>([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const { data, dataSuccess } = useSelector(
    (state: StateInterface) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const listData =
    productSection.filter((value) => value).length === 0 &&
    productMaterial.filter((value) => value).length === 0 &&
    productBrands.filter((value) => value).length === 0 &&
    min === 0 &&
    max === 100000
      ? data
      : data.filter((value) => {
          let isBrand: boolean = false,
            isSection: boolean = false,
            isMaterial: boolean = false,
            isValidPrice: boolean = false;

          let price = value.price - (value.price * value.discount) / 100;

          if (
            productBrands.length > 0 &&
            productBrands.filter((val, index) => {
              return val.toLowerCase() === value.brandName.toLowerCase();
            }).length > 0
          ) {
            isBrand = true;
          }

          if (
            productSection.filter((val, index) => {
              return val.toLowerCase() === value.section.toLowerCase();
            }).length > 0
          ) {
            isSection = true;
          }

          if (
            productMaterial.length &&
            productMaterial.filter((val, index) => {
              return (
                value.materialType.filter((type) => {
                  return val.toLowerCase() === type.toLowerCase();
                }).length > 0
              );
            }).length > 0
          ) {
            isMaterial = true;
          }
          if (price >= min && price <= max) {
            isValidPrice = true;
          }
          return (
            (productBrands.length === 0 || isBrand) &&
            (productMaterial.length === 0 || isMaterial) &&
            (productSection.length === 0 || isSection) &&
            isValidPrice
          );
        });

  //returning product component

  return dataSuccess ? (
    <span>loading</span>
  ) : (
    <div className="flex flex-row">
      {/* Adding filters*/}
      <div className="flex flex-col w-1/4 px-4">
        <TitleComponent title="Section" />
        <FilterComponent
          listFilter={section}
          handleChange={(val) => {
            if (!(productSection.filter((value) => value === val).length > 0)) {
              setProductSection([...productSection, val]);
            } else
              setProductSection(
                productSection.filter((value) => value !== val)
              );
          }}
        />
        <TitleComponent title="Brands" />
        <FilterComponent
          listFilter={brands}
          handleChange={(val) => {
            if (!(productBrands.filter((value) => value === val).length > 0)) {
              setProductBrands([...productBrands, val]);
            } else
              setProductBrands(productBrands.filter((value) => value !== val));
          }}
        />
        <TitleComponent title="Material type" />
        <FilterComponent
          listFilter={material}
          handleChange={(val) => {
            if (!(productMaterial.filter((value) => value === val).length > 0))
              setProductMaterial([...productMaterial, val]);
            else
              setProductMaterial(
                productMaterial.filter((value) => value !== val)
              );
          }}
        />
        <TitleComponent title="Price Range" />
        <LabelComponent name="Min" />
        <div>
          <input
            type="range"
            step="100"
            value={min}
            max="100000"
            min="100"
            onChange={(event) => {
              const val = parseInt(event.target.value);
              if (val < max) setMin(val);
            }}
          />
          <span> {min}</span>
        </div>
        <LabelComponent name="Max" />
        <div>
          <input
            type="range"
            step="100"
            value={max}
            max="100000"
            min="100"
            onChange={(event) => {
              const val = parseInt(event.target.value);
              if (val > min) setMax(val);
            }}
          />
          <span> {max}</span>
        </div>
      </div>

      {/*Displaying products in grid*/}

      <div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mr-5">
          {listData &&
            listData.length > 0 &&
            listData.map(
              ({
                image,
                brandName,
                productId,
                productName,
                discount,
                price,
              }) => {
                return (
                  <CardComponent
                    image={image}
                    brandName={brandName}
                    productID={productId}
                    productName={productName}
                    discount={discount}
                    price={price}
                    key={productId}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default Products;
