import React from "react";
import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Validations from "src/app/validations";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";

export const CreateTicket = () => {
  const [index, setIndex] = React.useState(0);
  const handleClick = (i: number) => setIndex(i);
  const { user } = React.useContext(Contexts.UserContext);
  const { ticket } = Hooks.Support.useTickets(user?.uid as string);
  const { data: tickets } = Hooks.Firebase.useFireSnapshot<tickets>(
    "collection",
    `users/${user?.uid}/tickets`
  ).collectionSnapshot();
  const Submit = async (
    values: createTicket.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<createTicket.Form>
  ) => {
    const newTicket: tickets = {
      ...values,
      createdTime: new Date().getTime(),
      status: "pending",
    };
    await ticket(newTicket);
    setSubmitting(false);
    resetForm();
  };

  const navigate = Router.useNavigate();
  const handleView = (ticket: any) => {
    navigate(`view/${ticket.id}`, {
      state: {
        subject: ticket.subject,
        message: ticket.message,
        status: ticket.status,
      },
    });
  };

  const keysToExtract = ["id", "subject", "status"];
  const filteredTickets = tickets?.map((ticket: any) => {
    const newTicket = keysToExtract.reduce((obj: any, key: any) => {
      obj[key] = ticket[key];
      return obj;
    }, {});

    return newTicket;
  });
  const ticketData = filteredTickets
    ? filteredTickets.map((ticket) => ({
        ticket: ticket.id,
        subject: ticket.subject,
        status: (
          <Mui.Typography
            bgcolor={ticket.status === "pending" ? "#F0F0F0" : "#D8FFE5"}
            color={ticket.status === "pending" ? "text.primary" : "#098D00"}
            p='2px'
            borderRadius='6px'
            textAlign='center'
            textTransform='capitalize'
          >
            {ticket.status === "pending" ? 'pending' : 'resolved'}
          </Mui.Typography>
        ),
        action: (
          <Mui.Button
            onClick={() => handleView(ticket)}
            sx={{
              bgcolor: "#fcb92321",
              borderRadius: "6px",
              p: "2px",
              color: "primary.main",
              "&:hover": {
                bgcolor: "#fcb92321",
              },
            }}
          >
            view
          </Mui.Button>
        ),
      }))
    : [];

  return (
    <Components.Global.Container
      id="createTicket"
      direction="column"
      justifyContent="start"
      spacing={2}
      // sx={{ width: "100%" }}
      sx={{
        maxHeight: 550,
        width: "100%",
        height: 550,
        overflow: "auto",
      }}
    >
      <Mui.Stack direction="row" gap={2}>
        {["Create Ticket", "Ticket History"].map((help, i) => (
          <Mui.Button
            onClick={() => handleClick(i)}
            disableRipple
            sx={{
              fontWeight: 1000,
              color: `${index === i ? "text.primary" : "#818898"}`,
              borderBottom: "2px solid",
              borderRadius: 0,
              borderBottomColor: `${
                index === i ? "primary.main" : "transparent"
              }`,
              "&:hover": {
                // borderBottom: '2px solid',
                backgroundColor: "transparent",
                borderBottomColor: `${
                  index === i ? "primary.main" : "transparent"
                }`,
              },
            }}
          >
            {help}
          </Mui.Button>
        ))}
      </Mui.Stack>
      {
        {
          0: (
            <Formik.Formik
              initialValues={{
                subject: "",
                message: "",
                metamask: false,
              }}
              validationSchema={Validations.createTicket}
              onSubmit={Submit}
            >
              {({ values }) => (
                <Formik.Form>
                  <Mui.Grid container spacing={2}>
                    <Mui.Grid item xs={12}>
                      <Components.Form.FormField
                        type="text"
                        label="Subject"
                        name="subject"
                        size="medium"
                      />
                    </Mui.Grid>
                    <Mui.Grid item xs={12}>
                      <Components.Form.FormField
                        type="text"
                        label="Message"
                        name="message"
                        size="medium"
                        multiline
                        rows={10}
                      />
                    </Mui.Grid>
                    {/* <Mui.Grid item xs={12}>
              <Components.Form.CheckBox
                label="Metamask address change"
                name="metamask"
              />
              <Mui.Alert
                severity="warning"
                sx={{ display: values["metamask"] ? "flex" : "none" }}
              >
                Before updating the meta mask wallet address please verify
                your current address tokens are not in contract
              </Mui.Alert>
            </Mui.Grid> */}
                    <Mui.Grid item xs={6} sm={3}>
                      <Components.Form.SubmitButton
                        size="large"
                        sx={{ height: "fit-content", width: "fit-content" }}
                      >
                        Post Ticket
                      </Components.Form.SubmitButton>
                    </Mui.Grid>
                  </Mui.Grid>
                </Formik.Form>
              )}
            </Formik.Formik>
          ),
          1: (
            <>
              <Mui.Stack
                id="ticketList"
                spacing={2}
                sx={{
                  // maxHeight: 550,
                  width: "100%",
                  // height: 550,
                  overflow: "auto",
                }}
              >
                {ticketData?.length ? (
                  <Components.Global.ResponsiveTable
                    key="ticket"
                    data={ticketData}
                    titles={["Tickets", "Subject", "Status", "Action"]}
                  />
                ) : (
                  // tickets
                  //   ?.sort((a, b) =>
                  //     a.createdTime < b.createdTime
                  //       ? 1
                  //       : b.createdTime < a.createdTime
                  //       ? -1
                  //       : 0
                  //   )
                  //   ?.map((ticket, index) => (
                  //     // <Pages.User.Support.Views.Ticket key={index} {...ticket} />
                  //   ))
                  <Mui.Typography
                    variant="h6"
                    textAlign="center"
                    py={5}
                    sx={{ color: Mui.colors.grey[400] }}
                  >
                    No Tickets Found
                  </Mui.Typography>
                )}
              </Mui.Stack>
            </>
          ),
        }[index]
      }
    </Components.Global.Container>
  );
};

export declare namespace createTicket {
  export interface Form {
    subject: string;
    message: string;
    metamask: boolean;
  }
}
