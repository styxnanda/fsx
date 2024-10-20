export {}
console.log("HELLO WORLD FROM BGSCRIPTS")

if (process.env.PLASMO_PUBLIC_TEST === "Count") {
  console.log("Ini count coba")
} else {
  console.log("Ini bukan count")
}
