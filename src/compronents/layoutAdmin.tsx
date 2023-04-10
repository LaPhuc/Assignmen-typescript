import { Image, Layout, Menu, theme } from "antd";
import Item from "antd/es/list/Item";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { IUserToken } from "../interface/user";

const { Header, Content, Footer, Sider: Sided } = Layout;

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState<IUserToken>();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    let text = "Bạn có chắc chắn muốn đăng xuất không!";
    if (confirm(text) == true) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };
  console.log(dataUser);

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("user")!);
    setDataUser(user);
    if (dataUser?.role === "member") {
      navigate("/");
    }
  }, [JSON.parse(localStorage.getItem("user")!)]);
  return (
    <>
      <Layout style={{ minHeight: "100vh", margin: 0 }}>
        <Sided>
          <Link
            to={"/"}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              preview={false}
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                width: "100px",
                height: "100%",
                // margin: "auto",
              }}
              src="https://res.cloudinary.com/dwjntndq7/image/upload/v1680924757/ECMA/Lorna_1_omjarn.png"
            />
          </Link>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key={1}>
              <Link to={"/admin"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key={2}>
              <Link to={"/admin/products"}>Product</Link>
            </Menu.Item>
            <Menu.Item key={3}>
              <Link to={"/admin/categories"}>Categories</Link>
            </Menu.Item>
          </Menu>

          <Item
            className="bottom-10 py-3 w-full absolute text-white cursor-pointer flex justify-center hover:text-green-500"
            onClick={() => handleLogout()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </Item>
        </Sided>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{}}>
            <div
              style={{
                padding: 24,
                minHeight: "100%",
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
