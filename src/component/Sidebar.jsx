import { useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SidebarLink from "./SidebarLink";
import { generateKey } from "@generateKey";
import Drawer from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { USER, LINKS, RESOURCE } from "@/constants";
import { changeLinks } from "@sidebar";

export default function (props) {
  const { open, toggleDrawer } = props;
  const dispatch = useDispatch();

  const sideBar = useSelector((state) => state.sideBar);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    auth?.user?.roles?.includes(USER.ADMIN)
      ? dispatch(changeLinks({ links: LINKS.ADMIN }))
      : auth?.user?.roles?.includes(USER.EMPLOYEE)
      ? dispatch(changeLinks({ links: LINKS.EMPLOYEE }))
      : auth?.user?.roles?.includes(USER.CUSTOMER)
      ? dispatch(changeLinks({ links: LINKS.CUSTOMER }))
      : null;
  }, [auth, dispatch]);

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [RESOURCE.NUMBER.ONE],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {sideBar?.links?.map((e) => {
            return (
              <div key={generateKey(RESOURCE.NUMBER.FIVE)}>
                <SidebarLink title={e?.title} link={e?.link} icon={e?.icon} />
                <Divider sx={{ my: RESOURCE.NUMBER.ONE }} />
              </div>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
