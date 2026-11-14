export default function mainInit() {
    /* =========================================================
        DATA
        ========================================================= */
    const jobs = [
        {
        id: "food-service",
        title: "Food Service Team Member",
        company: "[Company name]",
        city: "[City], Canada",
        type: "Part-time",
        category: "Food service",
        pay: "[Pay range]",
        abroad: true,
        description: "Support daily food preparation, service, and workspace upkeep. [Additional role details]",
        requirements: "[Required experience and skills]",
        schedule: "[Shift schedule]",
        start: "[Start date]",
        deadline: "[Apply-by date]"
        },
        {
        id: "retail-associate",
        title: "Retail Sales Associate",
        company: "[Company name]",
        city: "[City], Canada",
        type: "Full-time",
        category: "Retail",
        pay: "[Pay range]",
        abroad: false,
        description: "Help customers, organize products, and support the shop team. [Additional role details]",
        requirements: "[Required experience and skills]",
        schedule: "[Shift schedule]",
        start: "[Start date]",
        deadline: "[Apply-by date]"
        },
        {
        id: "event-assistant",
        title: "Event Setup Assistant",
        company: "[Company name]",
        city: "[City], Canada",
        type: "One-day",
        category: "Events",
        pay: "[Pay range]",
        abroad: true,
        description: "Assist with venue setup and event-day coordination. [Additional role details]",
        requirements: "[Required experience and skills]",
        schedule: "[Event schedule]",
        start: "[Start date]",
        deadline: "[Apply-by date]"
        },
        {
        id: "warehouse-associate",
        title: "Warehouse Associate",
        company: "[Company name]",
        city: "[City], Canada",
        type: "Full-time",
        category: "Warehouse",
        pay: "[Pay range]",
        abroad: true,
        description: "Help organize stock and prepare outgoing orders. [Additional role details]",
        requirements: "[Required experience and skills]",
        schedule: "[Shift schedule]",
        start: "[Start date]",
        deadline: "[Apply-by date]"
        },
        {
        id: "guest-services",
        title: "Guest Services Assistant",
        company: "[Company name]",
        city: "[City], Canada",
        type: "Part-time",
        category: "Hospitality",
        pay: "[Pay range]",
        abroad: false,
        description: "Welcome guests and help with day-to-day front desk tasks. [Additional role details]",
        requirements: "[Required experience and skills]",
        schedule: "[Shift schedule]",
        start: "[Start date]",
        deadline: "[Apply-by date]"
        },
        {
        id: "office-coordinator",
        title: "Office Coordinator",
        company: "[Company name]",
        city: "[City], Canada",
        type: "Full-time",
        category: "Office",
        pay: "[Pay range]",
        abroad: true,
        description: "Coordinate routine office tasks and support the wider team. [Additional role details]",
        requirements: "[Required experience and skills]",
        schedule: "[Work schedule]",
        start: "[Start date]",
        deadline: "[Apply-by date]"
        }
    ];

    const EMPTY_PROFILE = {
        first: "[First name]",
        name: "[Full name]",
        email: "[Email]",
        phone: "[Phone]",
        country: "[Country]"
    };

    const state = {
        signedIn: false,
        role: "Job seeker",
        profile: { ...EMPTY_PROFILE },
        applications: [],
        saved: new Set(),
        selected: "food-service",
        page: 1,
        keyword: "",
        location: "",
        type: "",
        category: "",
        abroad: false
    };

    const PAGE_SIZE = 4;
    const PROTECTED_PAGES = new Set(["applications", "post-job", "dashboard", "profile"]);
    const STATIC_ROUTES = [
        "/", "/jobs", "/applications", "/post-job", "/signup",
        "/signin", "/dashboard", "/profile", "/about", "/contact"
    ];


    /* =========================================================
        HELPERS
        ========================================================= */
    const $ = id => document.getElementById(id);

    const isPlaceholder = value => value.startsWith("[");

    function text(parent, tag, value, className) {
        const el = document.createElement(tag);
        el.textContent = value;
        if (className) el.className = className;
        parent.append(el);
        return el;
    }

    function showNotice(message) {
        $("notice").textContent = message;
        $("notice").hidden = false;
    }

    function selectedJob() {
        return jobs.find(j => j.id === state.selected) || jobs[0];
    }


    /* =========================================================
        ROUTER
        ========================================================= */
    function route(path, replace = false) {
        if (PROTECTED_PAGES.has(path.slice(1)) && !state.signedIn) {
        showNotice("Sign in to continue with this demo.");
        path = "/signin";
        }

        if (!STATIC_ROUTES.includes(path) && !/^\/jobs\/[^/]+(?:\/apply)?$/.test(path)) {
        path = "/";
        }

        const match = path.match(/^\/jobs\/([^/]+)(\/apply)?$/);
        if (match) {
        if (!jobs.some(j => j.id === match[1])) path = "/jobs";
        else state.selected = match[1];
        }

        history[replace ? "replaceState" : "pushState"]({}, "", path);

        let key;
        if (path === "/") key = "home";
        else if (/^\/jobs\/[^/]+\/apply$/.test(path)) key = "apply";
        else if (/^\/jobs\/[^/]+$/.test(path)) key = "detail";
        else key = path.slice(1);

        const navKey = (key === "detail" || key === "apply") ? "jobs" : key;

        document.querySelectorAll(".page").forEach(el => {
        el.classList.toggle("active", el.id === key);
        });
        document.querySelectorAll("[data-nav]").forEach(el => {
        el.classList.toggle("active", el.dataset.nav === navKey);
        });

        $("signedOutNav").hidden = state.signedIn;
        $("signedInNav").hidden = !state.signedIn;
        $("mobileOut").hidden = state.signedIn;
        $("mobileIn").hidden = !state.signedIn;
        $("mobileMenu").classList.remove("open");
        $("menuButton").setAttribute("aria-expanded", "false");

        if (key === "home") renderHome();
        if (key === "jobs") renderResults();
        if (key === "detail") renderDetail();
        if (key === "apply") renderApply();
        if (key === "applications") renderApplications();
        if (key === "dashboard") renderDashboard();
        if (key === "profile") renderProfile();

        window.scrollTo(0, 0);
    }


    /* =========================================================
        RENDER: shared job card
        ========================================================= */
    function jobCard(job) {
        const card = document.createElement("article");
        card.className = "card jobcard";

        text(card, "span", job.category.toUpperCase(), "eyebrow");
        text(card, "h3", job.title);
        text(card, "p", job.company + " · " + job.city);

        const tags = document.createElement("div");
        tags.className = "tags";
        [job.type, job.category, ...(job.abroad ? ["Open to applicants abroad"] : [])].forEach(v => {
        text(tags, "span", v, "tag" + (v.includes("abroad") ? " blue" : ""));
        });
        card.append(tags);

        text(card, "p", job.description);

        const bottom = document.createElement("div");
        bottom.className = "bottom";
        text(bottom, "strong", job.pay);

        const button = text(bottom, "button", "View job", "btn secondary");
        button.type = "button";
        button.addEventListener("click", () => route("/jobs/" + job.id));
        card.append(bottom);

        return card;
    }

    function fillCards(id, items) {
        $(id).replaceChildren(...items.map(jobCard));
    }


    /* =========================================================
        RENDER: Home
        ========================================================= */
    function renderHome() {
        fillCards("latestJobs", jobs.slice(0, 3));
    }


    /* =========================================================
        RENDER: Find Jobs
        ========================================================= */
    function checkedTypes() {
        return [...document.querySelectorAll('[name="filterType"]:checked')].map(c => c.value);
    }

    function filterJobs() {
        const types = checkedTypes();

        return jobs.filter(j => {
        const haystack = (j.title + " " + j.description + " " + j.category).toLowerCase();

        return (!state.keyword || haystack.includes(state.keyword.toLowerCase()))
            && (!state.location || j.city.toLowerCase().includes(state.location.toLowerCase()))
            && (!state.type || j.type === state.type)
            && (!state.category || j.category === state.category)
            && (!state.abroad || j.abroad)
            && (!types.length || types.includes(j.type));
        });
    }

    function renderResults() {
        const list = filterJobs();
        const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
        state.page = Math.min(state.page, pages);

        $("resultCount").textContent = list.length + " jobs found";
        fillCards("resultsGrid", list.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE));
        $("noResults").hidden = !!list.length;
        $("pageIndicator").textContent = state.page + " / " + pages;
        $("prevPage").disabled = state.page === 1;
        $("nextPage").disabled = state.page === pages;

        $("filterCategory").value = state.category;
        $("filterAbroad").checked = state.abroad;
        $("jobsKeyword").value = state.keyword;
        $("jobsLocation").value = state.location;
        $("jobsType").value = state.type;
    }

    function renderDetail() {
        const j = selectedJob();

        $("detailTitle").textContent = j.title;
        $("detailCompany").textContent = j.company;
        $("detailLocation").textContent = j.city;
        $("detailDescription").textContent = j.description;
        $("detailRequirements").textContent = j.requirements;
        $("detailSchedule").textContent = j.schedule;
        $("detailPay").textContent = j.pay;
        $("detailStart").textContent = j.start;
        $("detailDeadline").textContent = j.deadline;
        $("abroadBadge").hidden = !j.abroad;

        $("detailTags").replaceChildren();
        [j.type, j.category].forEach(v => text($("detailTags"), "span", v, "tag"));

        const saved = state.saved.has(j.id);
        $("saveText").textContent = saved ? "Saved job" : "Save job";
        $("saveButton").setAttribute("aria-pressed", String(saved));
    }

    function renderApply() {
        const j = selectedJob();

        $("applyJobTitle").textContent = j.title;
        $("applyJobCompany").textContent = j.company + " · " + j.city;

        $("applyJobTags").replaceChildren();
        [j.type, j.category].forEach(v => text($("applyJobTags"), "span", v, "tag"));

        if (state.signedIn) {
        $("appName").value = isPlaceholder(state.profile.name) ? "" : state.profile.name;
        $("appEmail").value = isPlaceholder(state.profile.email) ? "" : state.profile.email;
        $("appCountry").value = isPlaceholder(state.profile.country) ? "" : state.profile.country;
        }
    }


    /* =========================================================
        RENDER: signed-in pages
        ========================================================= */
    function renderApplications() {
        const body = $("applicationsBody");
        body.replaceChildren();
        $("applicationsEmpty").hidden = state.applications.length > 0;

        state.applications.forEach(a => {
        const job = jobs.find(v => v.id === a.id);
        if (!job) return;

        const tr = document.createElement("tr");
        [job.title, job.company, a.date].forEach(v => text(tr, "td", v));

        const status = document.createElement("td");
        text(status, "span", a.status, "tag blue");
        tr.append(status);

        const actions = document.createElement("td");

        const view = text(actions, "button", "View", "linkbtn");
        view.type = "button";
        view.onclick = () => route("/jobs/" + a.id);

        const withdraw = text(actions, "button", "Withdraw", "linkbtn");
        withdraw.type = "button";
        withdraw.onclick = () => {
            state.applications = state.applications.filter(v => v !== a);
            renderApplications();
            showNotice("Demo application withdrawn.");
        };

        tr.append(actions);
        body.append(tr);
        });
    }

    function renderDashboard() {
        $("welcomeTitle").textContent = "Welcome back, " + state.profile.first;
        $("statApplications").textContent = state.applications.length;
        $("statSaved").textContent = state.saved.size;
        $("statProfile").textContent = isPlaceholder(state.profile.name) ? "[X]%" : "80%";
        fillCards("recommendedJobs", jobs.slice(0, 3));
    }

    function renderProfile() {
        $("profileName").textContent = state.profile.name;
        $("profileEmail").textContent = state.profile.email;
        $("profilePhone").textContent = state.profile.phone;
        $("profileCountry").textContent = state.profile.country;
        $("profileRole").textContent = state.role;
    }


    /* =========================================================
        ACTIONS: navigation & session
        ========================================================= */
    function signout() {
        state.signedIn = false;
        route("/");
        showNotice("Signed out of the demo.");
    }

    document.addEventListener("click", e => {
        const target = e.target.closest("[data-route]");
        if (target) {
        e.preventDefault();
        route(target.dataset.route);
        }
    });

    $("menuButton").onclick = () => {
        const open = $("mobileMenu").classList.toggle("open");
        $("menuButton").setAttribute("aria-expanded", String(open));
    };

    $("signout").onclick = signout;
    $("mobileSignout").onclick = signout;

    window.addEventListener("popstate", () => route(location.pathname, true));


    /* =========================================================
        ACTIONS: Home & Find Jobs
        ========================================================= */
    $("homeSearch").onsubmit = e => {
        e.preventDefault();
        state.keyword = $("homeKeyword").value.trim();
        state.location = $("homeLocation").value.trim();
        state.type = $("homeType").value;
        state.category = "";
        state.page = 1;
        route("/jobs");
    };

    $("jobsSearch").onsubmit = e => {
        e.preventDefault();
        state.keyword = $("jobsKeyword").value.trim();
        state.location = $("jobsLocation").value.trim();
        state.type = $("jobsType").value;
        state.page = 1;
        renderResults();
    };

    $("categories").onclick = e => {
        const tile = e.target.closest("[data-category]");
        if (tile) {
        state.category = tile.dataset.category;
        state.page = 1;
        route("/jobs");
        }
    };

    ["filterCategory", "filterAbroad", "filterPay"].forEach(id => {
        $(id).addEventListener("change", () => {
        state.category = $("filterCategory").value;
        state.abroad = $("filterAbroad").checked;
        state.page = 1;
        renderResults();
        });
    });

    document.querySelectorAll('[name="filterType"]').forEach(el => {
        el.onchange = () => {
        state.page = 1;
        renderResults();
        };
    });

    $("clearFilters").onclick = () => {
        state.keyword = "";
        state.location = "";
        state.type = "";
        state.category = "";
        state.abroad = false;
        state.page = 1;
        $("filterPay").value = "";
        document.querySelectorAll('[name="filterType"]').forEach(c => (c.checked = false));
        renderResults();
    };

    $("prevPage").onclick = () => { state.page--; renderResults(); };
    $("nextPage").onclick = () => { state.page++; renderResults(); };


    /* =========================================================
        ACTIONS: job detail & apply
        ========================================================= */
    $("applyButton").onclick = () => route("/jobs/" + state.selected + "/apply");
    $("applyBack").onclick = () => route("/jobs/" + state.selected);

    $("saveButton").onclick = () => {
        const id = state.selected;
        if (state.saved.has(id)) state.saved.delete(id);
        else state.saved.add(id);

        renderDetail();
        showNotice(state.saved.has(id) ? "Job saved in this demo." : "Job removed from saved jobs.");
    };

    $("applyForm").onsubmit = e => {
        e.preventDefault();
        if (!$("applyForm").reportValidity()) return;

        state.applications.unshift({
        id: state.selected,
        date: new Date().toLocaleDateString("en-CA"),
        status: "Submitted"
        });

        if (!state.signedIn) {
        state.signedIn = true;
        state.profile.name = $("appName").value || "[Full name]";
        state.profile.email = $("appEmail").value || "[Email]";
        state.profile.first = "[First name]";
        }

        $("applyForm").reset();
        route("/applications");
        showNotice("Application submitted in this demo.");
    };


    /* =========================================================
        ACTIONS: post a job
        ========================================================= */
    $("postForm").onsubmit = e => {
        e.preventDefault();
        if (!$("postForm").reportValidity()) return;

        const id = "listing-" + Date.now();

        jobs.unshift({
        id,
        title: $("postTitle").value.trim(),
        company: $("postCompany").value.trim(),
        city: $("postLocation").value.trim(),
        type: $("postType").value,
        category: $("postCategory").value,
        pay: $("postPay").value.trim(),
        start: $("postStart").value,
        deadline: $("postDeadline").value,
        description: $("postDescription").value.trim(),
        requirements: $("postRequirements").value.trim(),
        schedule: "[Schedule]",
        abroad: $("postAbroad").checked
        });

        $("postForm").reset();
        route("/jobs/" + id);
        showNotice("Your job listing is published in this demo.");
    };


    /* =========================================================
        ACTIONS: sign up & sign in
        ========================================================= */
    document.querySelectorAll("[data-role]").forEach(b => {
        b.onclick = () => {
        state.role = b.dataset.role;
        document.querySelectorAll("[data-role]").forEach(v => {
            v.classList.toggle("active", v === b);
            v.setAttribute("aria-pressed", String(v === b));
        });
        };
    });

    $("signupForm").onsubmit = e => {
        e.preventDefault();
        if (!$("signupForm").reportValidity()) return;

        state.profile = {
        first: $("signupFirst").value.trim(),
        name: ($("signupFirst").value + " " + $("signupLast").value).trim(),
        email: $("signupEmail").value.trim(),
        phone: $("signupPhone").value.trim(),
        country: $("signupCountry").value.trim()
        };
        state.signedIn = true;

        $("signupForm").reset();
        route("/dashboard");
        showNotice("Welcome to the Nous Metier demo.");
    };

    $("signinForm").onsubmit = e => {
        e.preventDefault();
        if (!$("signinForm").reportValidity()) return;

        state.signedIn = true;
        state.profile.email = $("signinEmail").value.trim();

        $("signinForm").reset();
        route("/dashboard");
        showNotice("Signed in to the demo.");
    };


    /* =========================================================
        ACTIONS: profile
        ========================================================= */
    $("editProfile").onclick = () => {
        $("profileForm").hidden = false;
        $("editName").value = isPlaceholder(state.profile.name) ? "" : state.profile.name;
        $("editPhone").value = isPlaceholder(state.profile.phone) ? "" : state.profile.phone;
        $("editCountry").value = isPlaceholder(state.profile.country) ? "" : state.profile.country;
        $("editName").focus();
    };

    $("cancelEdit").onclick = () => { $("profileForm").hidden = true; };

    $("profileForm").onsubmit = e => {
        e.preventDefault();
        if (!$("profileForm").reportValidity()) return;

        state.profile.name = $("editName").value.trim();
        state.profile.first = state.profile.name.split(/\s+/)[0];
        state.profile.phone = $("editPhone").value.trim();
        state.profile.country = $("editCountry").value.trim();

        $("profileForm").hidden = true;
        renderProfile();
        showNotice("Demo profile updated.");
    };

    $("deleteAccount").onclick = () => { $("deleteConfirm").hidden = false; };
    $("cancelDelete").onclick = () => { $("deleteConfirm").hidden = true; };

    $("confirmDelete").onclick = () => {
        state.applications = [];
        state.saved.clear();
        state.profile = { ...EMPTY_PROFILE };
        $("deleteConfirm").hidden = true;
        signout();
        showNotice("Demo account and activity cleared.");
    };


    /* =========================================================
        INIT
        ========================================================= */
    route(location.pathname, true);

}

