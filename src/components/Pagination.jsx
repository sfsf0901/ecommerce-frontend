import { Pagination } from "@mui/material";

const Paginations = () => {
    return (
        <div>
            <Pagination
                count={11}
                defaultPage={6}
                siblingCount={1}
                boundaryCount={2}
                shape="rounded"
            />
        </div>
    )
};

export default Pagination;