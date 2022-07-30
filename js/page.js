const ITEMS_PER_PAGE = 12;

class Page {
    constructor(items, page_num) {
        this.items = items;
        this.number = page_num;
        this.parent =
          document.getElementById("themes_container") ||
          document.getElementById("icons_container") ||
          document.getElementById("gtk_container");
    }
    disappear() {
        this.parent.style.opacity = 0;
    }
    render() {
        this.parent.innerHTML = "";
        this.items.forEach((card) => {
            this.parent.appendChild(card.html_element);
        });
        this.parent.style.opacity = 1;
    }
}

class PageManager {
    constructor(items) {
        this.generate_pages(items);
        this.current_page = this.page_list[0];
        this.number_element = document.getElementById("page-number");
        this.current_page.render();
        this.update_number();
    }
    get_current_items() {
        var items = [];
        this.page_list.forEach(p => items = items.concat(p.items));
        return items;
    }
    generate_pages(items) {
        this.page_list = [];
        this.page_count = Math.max(Math.ceil(items.length / ITEMS_PER_PAGE), 1);
        if (items.length < 1) {
            // If there are no items, create an empty page
            this.page_list[0] = new Page([], 1);
        } else {
            for (let i = 0; i < this.page_count; i++) {
                const start_index = i * ITEMS_PER_PAGE;
                const end_index = start_index + ITEMS_PER_PAGE - 1;
                this.page_list[i] = new Page(
                    items.slice(start_index, end_index + 1),
                    i + 1
                );
            }
        }
        this.current_page = this.page_list[0];
    }
    get next_page() {
        return this.current_page.number < this.page_count
            ? // The page number starts from 1 (one higher than the array index), therefore it points to the next page
              this.page_list[this.current_page.number]
            : this.current_page;
    }
    get previous_page() {
        return this.current_page.number > 1
            ? // The page number starts from 1 (one higher than the array index), therefore it points to the next page
              this.page_list[this.current_page.number - 2]
            : this.current_page;
    }
    update_number() {
        if (this.page_count > 1) {
            this.number_element.innerHTML = `${this.current_page.number}/${this.page_count}`;
            document.getElementsByClassName("page-switcher")[0].style.display =
                "grid"; // Show the page switcher in case it's hidden
        } else {
            document.getElementsByClassName("page-switcher")[0].style.display =
                "none"; // Hide the page switcher when there is just one page
        }
    }
    go_to_next_page() {
        this.current_page.disappear();
        setTimeout(() => {
            this.current_page = this.next_page;
            setTimeout(() => {
                this.current_page.render();
                this.update_number();
            }, 200);
        }, 200);
    }
    go_to_previous_page() {
        this.current_page.disappear();
        setTimeout(() => {
            this.current_page = this.previous_page;
            setTimeout(() => {
                this.current_page.render();
                this.update_number();
            }, 200);
        }, 200);
    }
    go_to_last_page() {
        this.current_page.disappear();
        setTimeout(() => {
            this.current_page = this.page_list[this.page_count - 1];
            setTimeout(() => {
                this.current_page.render();
                this.update_number();
            }, 200);
        }, 200);
    }
    go_to_first_page() {
        this.current_page.disappear();
        setTimeout(() => {
            this.current_page = this.page_list[0];
            setTimeout(() => {
                this.current_page.render();
                this.update_number();
            }, 200);
        }, 200);
    }
}

export { Page, PageManager };
