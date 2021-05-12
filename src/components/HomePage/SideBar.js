import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { productContext } from "../../context/ProductContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const Sidebar = ({ history }) => {
    const classes = useStyles();
    const { getProducts } = useContext(productContext);

    const [sliderValue, setSliderValue] = useState(getSlider());
    const [category, setCategory] = useState(getCategory());

    function getCategory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("genre");
    }

    function getSlider() {
        const search = new URLSearchParams(history.location.search);
        return search.get("price_lte");
    }

    function handleSliderValue(e, value) {
        const search = new URLSearchParams(history.location.search);
        search.set("price_lte", value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
        setSliderValue(value);
    }
    const handleChangeCategory = (e) => {
        if (e.target.value === "All") {
            history.push(`${history.location.pathname.replace("type")}`);
            getProducts(history);
            setCategory(e.target.value);
            return;
        }
        const search = new URLSearchParams(history.location.search);
        search.set("genre", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
        setCategory(e.target.value);
    };

    return (
        <div className="container">
            <Grid item m={3}>
                <Paper className={classes.paper}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Жанры</FormLabel>
                        <RadioGroup
                            value={category}
                            onChange={handleChangeCategory}
                            aria-label="genre"
                            name="genre"
                        >
                            <FormControlLabel
                                value="Приключение"
                                control={<Radio />}
                                label="Приключение"
                            />
                            <FormControlLabel
                                value="мотивация"
                                control={<Radio />}
                                label="Мотивация"
                            />
                            <FormControlLabel
                                value="энциклопедия"
                                control={<Radio />}
                                label="Энциклопедия"
                            />
                            <FormControlLabel
                                value="All"
                                control={<Radio />}
                                label="ALL"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Grid>
                        <Slider
                            min={500}
                            max={20000}
                            value={sliderValue}
                            onChange={handleSliderValue}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                        />
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
};

export default Sidebar;
