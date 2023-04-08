import {Route} from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  return (
    <div>
      <Route exact path="/" component={BlogPage} />
      <Route exact path="/blogs/:titleSlug" component={BlogDetail} />
    </div>
  );
}