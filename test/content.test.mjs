import test from "node:test";
import assert from "node:assert";
import * as content from "../src/content.js";

test("amazon.com URLs", () => {
  [
    [
      // product with name and dp
      "https://www.amazon.com/What-Every-Thinks-About-Apart/dp/1849531986/ref=pd_bxgy_img_sccl_1/145-3527643-1552806?pd_rd_w=SR8hr&content-id=amzn1.sym.43d28dfc-aa4f-4ef6-b591-5ab7095e137f&pf_rd_p=43d28dfc-aa4f-4ef6-b591-5ab7095e137f&pf_rd_r=RFF6A72G6G7GNH21Q5XC&pd_rd_wg=Cv4zu&pd_rd_r=70160509-2c7f-4963-9789-5b188b2e5a88&pd_rd_i=1849531986&psc=1",
      "https://www.amazon.com/dp/1849531986/",
    ],
    [
      // product with gp/product
      "https://www.amazon.com/gp/product/B0BW9TRGKV?storeType=ebooks&pf_rd_p=114af915-8ac1-4c2e-b2e9-571a645b5906&pf_rd_r=THA7RCES9ASW6YRQD1SH&pd_rd_wg=W5JLO&pd_rd_i=B0BW9TRGKV&ref_=dbs_f_def_rwt_wigo_cp_recs_wigo_3&pd_rd_w=NnuMN&content-id=amzn1.sym.114af915-8ac1-4c2e-b2e9-571a645b5906&pd_rd_r=99a256d0-1293-4fae-a404-f7e001e6ae66",
      "https://www.amazon.com/dp/B0BW9TRGKV/",
    ],
    [
      // prime video content
      "https://www.amazon.com/gp/video/detail/B0B6VTHWT4/ref=atv_hm_hom_c_ondcaM_2_1?jic=8%7CEgNhbGw%3D",
      "https://www.amazon.com/dp/B0B6VTHWT4/",
    ],
    [
      // category without name
      "https://www.amazon.com/b/?ie=UTF8&node=16976406011&ref_=sv_subnav_goldbox_2",
      "https://www.amazon.com/b/?node=16976406011",
    ],
    [
      // category with name
      "https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc",
      "https://www.amazon.com/b/?node=2238192011",
    ],
    [
      // category with s
      "https://www.amazon.com/s?i=specialty-aps&bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A172541&ref=nav_em__nav_desktop_sa_intl_headphones_0_2_5_8",
      "https://www.amazon.com/s/?bbn=16225009011&rh=n:!16225009011,n:172541",
    ],
    [
      // category with /go/browse.html
      "https://www.amazon.com/gp/browse.html?rw_useCurrentProtocol=1&node=5522569011&ref_=chp_manbrowse_BOTYSF",
      "https://www.amazon.com/gp/browse.html?node=5522569011",
    ],
    [
      // ref only
      "https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb",
      "https://www.amazon.com/gp/goldbox",
    ],
  ].forEach((sample) => {
    assert.strictEqual(content.clean(sample[0]), sample[1]);
  });
});

test("amazon.co.jp URLs", () => {
  [
    [
      // product with name and dp
      "https://www.amazon.co.jp/%E3%82%A4%E3%83%BC%E3%83%AD%E3%83%B3%E3%83%BB%E3%83%9E%E3%82%B9%E3%82%AF-%E4%B8%8A-%E3%82%A6%E3%82%A9%E3%83%AB%E3%82%BF%E3%83%BC%E3%83%BB%E3%82%A2%E3%82%A4%E3%82%B6%E3%83%83%E3%82%AF%E3%82%BD%E3%83%B3/dp/4163917306/ref=pd_bxgy_img_sccl_1/358-2141615-3231618?pd_rd_w=VFXFj&content-id=amzn1.sym.bc57a5ab-9f02-4944-8c5c-9e1696e0d32c&pf_rd_p=bc57a5ab-9f02-4944-8c5c-9e1696e0d32c&pf_rd_r=EKP74BRKETP2S04GMDV3&pd_rd_wg=vYqii&pd_rd_r=f2a91670-e425-42dd-ae71-497790e5dd5b&pd_rd_i=4163917306&psc=1",
      "https://www.amazon.co.jp/dp/4163917306/",
    ],
    [
      // product with gp/product
      "https://www.amazon.co.jp/gp/product/B09SWTXTNV/ref=s9_acss_bw_cg_compErea_2a1_w?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=merchandised-search-3&pf_rd_r=DRT8VFQN88A7AJ3M5DEW&pf_rd_t=101&pf_rd_p=c22b6d94-47c9-4103-89d2-df96a5e35b6b&pf_rd_i=3933932051",
      "https://www.amazon.co.jp/dp/B09SWTXTNV/",
    ],
    [
      // prime video content
      "https://www.amazon.co.jp/gp/video/detail/B08VWF7Z9K/ref=atv_ge_agd_88_c_7kl2bW_brws_1_12?jic=8%7CEgRzdm9k",
      "https://www.amazon.co.jp/dp/B08VWF7Z9K/",
    ],
    [
      // category with name
      "https://www.amazon.co.jp/%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF-%E3%83%9E%E3%83%B3%E3%82%AC-%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8E%E3%83%99%E3%83%AB-%E9%80%9A%E8%B2%A9/b/?ie=UTF8&node=466280&ref_=sv_b_6",
      "https://www.amazon.co.jp/b/?node=466280",
    ],
  ].forEach((sample) => {
    assert.strictEqual(content.clean(sample[0]), sample[1]);
  });
});

test("item.rakuten.co.jp URLs", () => {
  [
    [
      // product
      "https://item.rakuten.co.jp/kirishimashizen/aquakirishima6001/?iasid=07rpp_10095___e6-lncqpbzi-8e-a6125992-8964-4fcc-b4a9-d2752cc6f1ca",
      "https://item.rakuten.co.jp/kirishimashizen/aquakirishima6001/",
    ],
  ].forEach((sample) => {
    assert.strictEqual(content.clean(sample[0]), sample[1]);
  });
});
