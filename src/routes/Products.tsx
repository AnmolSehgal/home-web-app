import { useState } from "react";
import { connect } from "react-redux";

import { brands, material, section } from "../utils";
import { CardComponent } from "../components/CardComponent";
import { FilterComponent } from "../components/FilterComponent";
import { ProductsState } from "./types";
import TitleComponent from "../components/TitleComponent";

const Products = (props: ReturnType<typeof mapStateToProps>) => {
  const [productMaterial, setProductMaterial] = useState(
    new Array(brands.length).fill(false)
  );
  const [productBrands, setProductBrands] = useState(
    new Array(brands.length).fill(false)
  );
  const [productSection, setProductSection] = useState(
    new Array(brands.length).fill(false)
  );

  const { data, dataSuccess } = props;

  //Applying filter on data list

  const listData =
    productSection.filter((value) => value).length === 0 &&
    productMaterial.filter((value) => value).length === 0 &&
    productBrands.filter((value) => value).length === 0
      ? data
      : data.filter((value) => {
          if (
            productBrands.filter((val, index) => {
              return (
                val === true &&
                brands[index].toLowerCase() === value.brandName.toLowerCase()
              );
            }).length > 0
          ) {
            console.log("hi brands");
            return true;
          }

          if (
            productSection.filter((val, index) => {
              return (
                val === true &&
                section[index].toLowerCase() === value.section.toLowerCase()
              );
            }).length > 0
          ) {
            console.log("hi section");
            return true;
          }

          if (
            productMaterial.filter((val, index) => {
              return (
                val === true &&
                value.materialType.filter((value) => {
                  return value.toLowerCase() === material[index].toLowerCase();
                }).length > 0
              );
            }).length > 0
          ) {
            console.log("hi material");
            return true;
          }
          return false;
        });

  //returning product component

  return dataSuccess ? (
    <span>loading</span>
  ) : (
    <div className="flex flex-row">
      {/* Adding filters*/}
      <div className="flex flex-col w-64 px-4">
        <TitleComponent title="Section" />
        <FilterComponent
          listFilter={section}
          value={productSection}
          handleChange={(index) => {
            const list = productSection.map((value, i) => {
              if (i === index) return !value;
              return value;
            });
            setProductSection(list);
          }}
        />
        <TitleComponent title="Brands" />
        <FilterComponent
          listFilter={brands}
          value={productBrands}
          handleChange={(index) => {
            const list = productBrands.map((value, i) => {
              if (i === index) return !value;
              return value;
            });
            setProductBrands(list);
          }}
        />
        <TitleComponent title="Material type" />
        <FilterComponent
          listFilter={material}
          value={productMaterial}
          handleChange={(index) => {
            const list = productMaterial.map((value, i) => {
              if (i === index) return !value;
              return value;
            });
            setProductMaterial(list);
          }}
        />
      </div>

      {/*Displaying products in grid*/}

      <div>
        <div className="grid grid-cols-4 gap-5 mr-5">
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
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ProductsState) => {
  console.log("State  hello", state);
  return {
    data: state.products.data,
    dataSuccess: state.products.dataSuccess,
  };
};

export default connect(mapStateToProps)(Products);
