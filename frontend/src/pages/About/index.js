import classNames from 'classnames/bind';
import styles from './About.module.scss';
import aboutPageImages from '~/assets/images/aboutPageImages';
import Breadcrumb from '~/components/Breadcrumb';
import SideBar from '~/components/Layout/components/SideBar';
import SideBox from '~/components/SideBox';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function About() {
    return (
        <>
            <Breadcrumb cases={{ title: 'Shop Thời Trang Thể Thao' }} />
            <div className={cx('container')}>
                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <h1>Giới Thiệu Shop Thời Trang Thể Thao</h1>
                    </div>
                    <div className={cx('content')}>
                        <h4 className={cx('title')}> Giới Thiệu Shop Thời Trang Thể Thao</h4>
                        <p>
                            &emsp; Đến với shop khách hàng không chỉ tìm mua phụ kiện đá bóng. Bên cạnh đó, đơn vị còn cung cấp các loại đồ tập liên quan đến nhiều môn thể thao khác nhau cho bạn thỏa thích lựa chọn. Ngoài ra, các mẫu sản phẩm tại đây luôn được cải tiến, đa dạng về kiểu dáng thiết kế, chất lượng phù hợp cho nhiều nhóm đối tượng khách hàng
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[0]} alt="img" />
                            <br />
                            <span>Hình ảnh shop thời trang thể thao</span>
                        </div>
                        <p>
                            &emsp; Đơn vị có sẵn đội ngũ tư vấn viên được đào tạo bài bản trong môi trường chuyên nghiệp. Mọi thông tin thắc mắc, tư vấn về sản phẩm của đơn vị sẽ được nhân viên nhanh chóng tiếp cận và hỗ trợ. Nhờ vậy, bạn có thể dễ dàng tìm kiếm được cho mình những mẫu sản phẩm ưng ý và phù hợp nhất. Nếu có nhu cầu tìm hiểu về sản phẩm, bạn chỉ việc để lại thông tin nhân viên sẽ chủ động liên hệ và hỗ trợ chi tiết nhất.
                        </p>
                        <p>
                            &emsp; Tất cả các sản phẩm đồ thể thao tại Shop được cam kết, đảm bảo với quy trình và dây chuyền sản xuất chất lượng cao, nghiêm ngặt. Đồng thời, đơn vị còn có chế độ bảo hành tốt, các vấn đề, lỗi liên quan đến sản phẩm sẽ nhanh chóng được nhân viên hỗ trợ kịp thời.
                        </p>
                        <p>
                            &emsp;Các sản phẩm tại Shop đều được công khai, niêm yết giá trên toàn hệ thống. Bạn hoàn toàn yên tâm khi mua đồ thể thao tại đây. Đồng thời, với quy mô sản xuất lớn, công nghệ hiện đại giá bán sản phẩm của đơn vị cũng ưu đãi, có tính cạnh tranh cao so với nhiều đối thủ kinh doanh hiện nay.

                            Trên đây là những thông tin giới thiệu Shop. Mong rằng, bạn đọc sẽ có được cho mình thêm nhiều điều bổ ích trong quá trình mua đồ tập thể thao khi biết đến bài giới thiệu Shop này.
                        </p>
                    </div>
                </div>
                <SideBar>
                    <SideBox title="Danh Mục page" collapsible>
                        <div className={cx('sidebar-list')}>
                            <ul className={cx('menu-list')}>
                                <li className={cx('item')}>
                                    <Link to="/">Thông tin tuyển dụng</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Tìm kiếm</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Giới thiệu</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Chính sách đổi trả</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Chính sách cộng tác viên & Đại lý</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Hướng dẫn mua hàng</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Chính sách bảo mật</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Hướng dẫn cách thanh toán và áp dụng Voucher trên REEPAY</Link>
                                </li>
                            </ul>
                        </div>
                    </SideBox>
                </SideBar>
            </div>
        </>
    );
}

export default About;
