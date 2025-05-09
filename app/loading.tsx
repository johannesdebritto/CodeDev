// app/loading.tsx
export default function Loading() {
  return (
    <div
      style={{
        background: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "9999",
      }}
    >
      <p>Loading...</p>
    </div>
  );
}
